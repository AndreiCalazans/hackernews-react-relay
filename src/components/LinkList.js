import React from 'react';
import {
  createFragmentContainer,
  createPaginationContainer,
  graphql
} from 'react-relay';
import styled from 'styled-components';

import { ITEMS_PER_PAGE } from '../constants';
import Link from './Link';
import NewVoteSubscription from '../subscriptions/NewVoteSubscription';

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
  right: 10px;

  input {
    width: 100px;
  }
`;

const BtnContainer = styled.div`

`;
class LinkList extends React.Component {
  state = {
    filterValue: null,
  }

  componentDidMount() {
    NewVoteSubscription()
  }

  render() {

    return (
      <Container>
        <SearchField>
          <input type='text' placeholder='Search link' onChange={this._handleSearch} value={this.state.filterVAlue} />
        </SearchField>
        {this.props.viewer.allLinks.edges.map(({node}, index) => (
          <Link key={node.__id} link={node} index={index}/>
        ))}

        <BtnContainer>
          <button
            onClick={() => this._loadMore()}
          >More</button>
        </BtnContainer>
        
      </Container>
    )
  }

  _handleSearch = (e) => {
    // improve add a debounce.
    this.setState({ filterValue: e.target.value }, this._refetchConnection());
  }

  _refetchConnection() {
    this.props.relay.refetchConnection(10,(e) => null, {
      filter: {
        description_contains: this.state.filterValue
      }
    });
  }

  _loadMore() {
    if (!this.props.relay.hasMore()) {
      console.log('Nothing more to load');
      return
    } else if (this.props.relay.isLoading()) {
      console.log('Request is already pending');
      return
    }

    this.props.relay.loadMore(ITEMS_PER_PAGE);
  }
}


// export default createFragmentContainer(
//   LinkList,
//   graphql`
//     fragment LinkList_viewer on Viewer {
//       allLinks(last: 100, orderBy: createdAt_DESC) @connection(key: "LinkList_allLinks", filters: []) {
//         edges {
//           node {
//             ...Link_link
//           }
//         }
//       }
//     }
//   `
// );

export default createPaginationContainer(LinkList,
  {
    viewer: graphql`
      fragment LinkList_viewer on Viewer {
        allLinks(
          filter: $filter,
          first: $count,
          after: $after,
          orderBy: createdAt_DESC
        ) @connection(key: "LinkList_allLinks") {
          edges {
            node {
              ...Link_link
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    `
  },
  {
    direction: 'forward', // forward or backward
    query: graphql` 
      query LinkListForwardQuery(
        $count: Int!,
        $after: String,
        $filter: LinkFilter,
      ) {
        viewer {
          ...LinkList_viewer
        }
      }
    `, // this query is called by the loadMore provied by relay.
    getConnectionFromProps(props) { // the objective is to indicate to relay which connection to paginate through, only
      // relevant when you have multiple connections on the same query/compponent.
      return props.viewer && props.viewer.allLinks;
    },
    getFragmentVariables(previousVariables, totalCount) {
      // this defines the variables passed to the first query.
      return {
        ...previousVariables,
        count: totalCount,
      }
    },
    getVariables(props, paginationInfo, fragmentVariables) {
      // this defines the variables passed to the refetched 'second query'.
      return {
        count: paginationInfo.count,
        after: paginationInfo.cursor,
      }
    },
   }
)