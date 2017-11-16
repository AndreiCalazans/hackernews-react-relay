import React from 'react';
import {
  QueryRenderer,
  graphql
} from 'react-relay';
import environment from '../Environment';
import UserList from './UserList';

const UserListPageQuery = graphql`
  query UserListPageQuery {
    viewer {
      ...UserList_viewer
    }
  }
`;

class UserListPage extends React.Component {
  
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={UserListPageQuery}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</ div>
          } else if (props) {
            return <UserList viewer={props.viewer} />
          }
          return <div>Loading</ div>
        }}
      />
    )
  }
}

export default UserListPage;
