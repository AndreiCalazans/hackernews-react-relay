import { commitMutation, graphql } from 'react-relay';
import environment from '../Environment';
// import { ConnectionHandler } from 'relay-runtime';

const mutation = graphql`
  mutation CreateVoteMutation($input: CreateVoteInput!) {
    createVote(input: $input) {
      vote {
        id
        link {
          id
          votes {
            count
          }
        }
        user {
          id
        }
      }
    }
  }
`;

export default (userId, linkId) => {
  const variables = {
    input: {
      userId,
      linkId,
      clientMutationId: '',
    },
  };

  commitMutation(environment, {
    mutation,
    variables,
    optimisticUpdater: proxyStore => {
      const link = proxyStore.get(linkId);
      // to access the objects in the proxyStore use getLinkedRecord
      // to acess the scalar points use getValue
      const currentVoteCount = link.getLinkedRecord('votes').getValue('count');
      const newVoteCount = currentVoteCount + 1;

      link.getLinkedRecord('votes').setValue(newVoteCount, 'count');
    },
    updater: proxyStore => {
      // RootFields use getRootField
      const createVoteField = proxyStore.getRootField('createVote');
      const newVote = createVoteField.getLinkedRecord('vote');
      const updatedLink = newVote.getLinkedRecord('link');
      const newVotes = updatedLink.getLinkedRecord('votes');
      const newVoteCount = newVotes.getValue('count');

      const link = proxyStore.get(linkId);
      link.getLinkedRecord('votes').setValue(newVoteCount, 'count');
    },
    onError: err => console.error(err),
  });
};
