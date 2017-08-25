import React from 'react';
import {
  createFragmentContainer,
  graphql
} from 'react-relay';
import styled from 'styled-components';

import { GC_USER_ID } from '../constants';
import { timeDifferenceForDate } from '../utils';
import CreateVoteMutation from '../mutations/CreateVoteMutation';

const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
  .votedBy {
    font-size: 12px;
    color: #717171;
  }
`;

const Count = styled.div`
  display:flex;
  color: #717171;
  margin-right: 7px;
  > div {
    font-size: 32px;
    position: relative;
    top: -14px;
    &:hover {
      cursor: pointer;
    }
  }
`;

class Link extends React.Component {
  render() {
    const userId = localStorage.getItem(GC_USER_ID);
    return (
      <Container>
        <Count>
          <span>{+this.props.index + 1}.</span>
          {userId && <div onClick={() => this._voteForLink()} >▴</div>}
        </Count>
        <div>
          <div>{this.props.link.description} ({this.props.link.url})</div>
          <div className='votedBy'>{this.props.link.votes.count} votes | by {this.props.link.postedBy ? this.props.link.postedBy.name
            : 'Unknown' } | {timeDifferenceForDate(this.props.link.createdAt)}
          </div>
        </div>
      </Container>
    );
  }

  _voteForLink = async () => {
    const userId = localStorage.getItem(GC_USER_ID);
    if (!userId) {
      console.log('Cant vote without user ID');
      return
    }
    const linkId = this.props.link.id;

    const canUserVoteOnLink = await this._userCanVoteOnLink(userId, linkId);
    if (canUserVoteOnLink) {
      CreateVoteMutation(userId, linkId)
    } else {
      console.log('Current already voted for that link');
    }
  }

  _userCanVoteOnLink = async (userId, linkId) => {
    const checkVoteQueryText = `
      query CheckVoteQuery($userId: ID!, $linkId: ID!) {
        viewer {
          allVotes(filter: {
            user: { id: $userId },
            link: { id: $linkId }
          }) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    `;
    const checkVoteQuery = { text: checkVoteQueryText };

    const result = await this.props.relay.environment._network.fetch(checkVoteQuery, {userId, linkId});
    return result.data.viewer.allVotes.edges.length === 0;
  }
}

export default createFragmentContainer(
  Link,
  graphql`
    fragment Link_link on Link {
      id
      description
      url
      createdAt
      votes {
        count
      }
      postedBy {
        id
        name
      }
    }
  `
);
