import * as React from 'react';
import styled from 'styled-components';
import { createFragmentContainer, graphql } from 'react-relay';

import { timeDifferenceForDate } from '../utils';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  p {
    margin: 0;
  }
  .createdAt {
    font-size: 12px;
    color: #717171;
  }
`;

class User extends React.Component {
  render() {
    const { name, createdAt } = this.props.user;
    return (
      <Container>
        <p>{name}</p>
        <p className="createdAt">created {timeDifferenceForDate(createdAt)}</p>
      </Container>
    );
  }
}

export default createFragmentContainer(
  User,
  graphql`
    fragment User_user on User {
      name
      createdAt
    }
  `,
);
