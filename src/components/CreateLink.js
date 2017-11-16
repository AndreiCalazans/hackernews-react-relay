import React from 'react';
import styled from 'styled-components';

import CreateLinkMutation from '../mutations/CreateLinkMutation';
import { GC_USER_ID } from '../constants';

const Wrapper = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  > input {
    margin-bottom: 20px;
    width: 200px;
  }
  > button {
    width: 100px;
  }
`;

class CreateLink extends React.Component {

  state = {
    description: '',
    url: '',
  }

  render() {
    return (
      <Wrapper>
        
          <input
            type="text"
            value={this.state.description}
            onChange={(e) => this.setState({description: e.target.value })}
            placeholder="A description for the link"
          />
          <input
            type="text"
            value={this.state.url}
            onChange={(e) => this.setState({url: e.target.value })}
            placeholder="The URL for the link"
          />
        
        <button onClick={() => this.createLink()}>Submit</button>
      </Wrapper>
    )
  }

  createLink = () => {
    const { description, url } = this.state;
    const postedById = localStorage.getItem(GC_USER_ID);
    if (!postedById) {
      console.error('No User logged in');
      return
    }
    CreateLinkMutation(postedById, description, url, () => this.props.history.push('/'));
  }

}

export default CreateLink;
