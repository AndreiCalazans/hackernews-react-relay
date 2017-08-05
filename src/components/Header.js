import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants';

class Header extends React.Component {
  render() {
    const userId = localStorage.getItem(GC_USER_ID);
    return (
      <div>
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
        </div>
      </div>
    )
  }
}

export default withRouter(Header);
