import React from 'react';
import {
  createFragmentContainer,
  graphql
} from 'react-relay';

class Link extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.link.description} ({this.props.link.url})</div>
      </div>
    );
  }

  voteForLink = async () => {
    // todo
  }
}

export default createFragmentContainer(
  Link,
  graphql`
    fragment Link_link on Link {
      id
      description
      url
    }
  `
);
