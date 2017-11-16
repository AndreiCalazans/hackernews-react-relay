import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants';

const Container = styled.div`
  background: #ff6600;
  display: flex;
  margin: 0 20px;
  padding: 10px;
  > div, a, button {
    padding: 3px;
    font-weight: 500;
  }
`;

class Header extends React.Component {
  render() {
    const userId = localStorage.getItem(GC_USER_ID);
    return (
      <Container>
        <div>Hacker News</div>
        <div>
          <Link to='/'>New</Link>
          {userId &&
          <Link to='/create'>submit</Link>
          }
          {
            userId ?
            <button
              onClick={() => {
                localStorage.removeItem(GC_USER_ID);
                localStorage.removeItem(GC_AUTH_TOKEN);
                this.props.history.push('/');
              }}
            >
              logout
            </button>
            :
            <Link to='/login'>Login</Link>
          }
          <Link to='/users'>Users</Link>
        </div>
      </Container>
    )
  }
}

export default withRouter(Header);
