import React from 'react';
import {
  createRefetchContainer,
  graphql
} from 'react-relay';
import styled from 'styled-components';

import User from './User';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  margin-top: 0;
  padding: 10px;
  background: #ececec;
`;

const SearchField = styled.div`
  width: 100%;
  position:relative;
  margin-bottom: 10px;
  input {
    width: 100px;
  }
`;

const BtnContainer = styled.div`
`;

class UserList extends React.Component {
  state = {
    filterValue: '',
  }

  renderEmptyMsg = () => <p> Sorry there are no users. </p>;

  render() {
    const { viewer } = this.props
    const { allUsers } = viewer;
    return (
      <Container>
        <SearchField>
          <input type='text' placeholder='Search link' onChange={this._handleSearch} value={this.state.filterVAlue} />
        </SearchField>
        {allUsers.edges.length > 0 ? 
          allUsers.edges.map(({node}, index) => <User user={node} />)
          :
          this.renderEmptyMsg()
        }

        <BtnContainer>
          {allUsers.pageInfo.hasNextPage &&
            <button
            onClick={() => this._loadMore()}
            >
            More
            </button>
          }
        </BtnContainer>
        
      </Container>
    )
  }

  _handleSearch = (e) => {
    // improve add a debounce.
    this.setState({ filterValue: e.target.value }, this._refetchConnection());
  }

  _refetchConnection() {
    const { relay } = this.props;

    const refetchVariables = fragmentVariables => {
      return {
        ...fragmentVariables,
        filter: {
          name_contains: this.state.filterValue
        }
      }
    }

    relay.refetch(refetchVariables, null);
  }

  _loadMore() {
    const { relay, viewer } = this.props;

    const refetchVariables = fragmentVariables => {
      const totalToRefetch = viewer.allUsers.edges.length + fragmentVariables.count;

      return {
        count: totalToRefetch,
        filter: {
          name_contains: this.state.filterValue
        }
      }
    }

    relay.refetch(refetchVariables, null)

  }
}

export default createRefetchContainer(UserList,
  {
    viewer: graphql.experimental`
      fragment UserList_viewer on Viewer
      @argumentDefinitions(
        count: {type: "Int", defaultValue: 1 }
        filter: {type: "UserFilter"}
      ) {
        allUsers(first: $count filter: $filter) {
          pageInfo {
            hasNextPage
          }
          edges {
            node {
              ...User_user
            }
          }
        }
      }
    `,
  },
  graphql.experimental`
    query UserListQuery($count: Int $filter: UserFilter) {
      viewer {
        ...UserList_viewer @arguments(
          count: $count
          filter: $filter
        )
      }
    }
  `
);