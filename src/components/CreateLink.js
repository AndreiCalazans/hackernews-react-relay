import React from 'react';
import CreateLinkMutation from '../mutations/CreateLinkMutation';
import { GC_USER_ID } from '../constants';

class CreateLink extends React.Component {

  state = {
    description: '',
    url: '',
  }

  render() {
    return (
      <div>
        <div>
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
        </div>
        <button
          onClick={() => this.createLink()}
        >Submit</button>
      </div>
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
