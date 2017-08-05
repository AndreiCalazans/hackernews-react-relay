import { Environment, Network, RecordSource, Store } from 'relay-runtime';

const store = new Store(new RecordSource());

const network = Network.create((operation, variables) => {

  return fetch('https://api.graph.cool/relay/v1/cj5zkeqs96v0u01047kxj21wg', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: opration.text,
      variables,
    }),
  }).then(response => {
    return response.json()
  })
})

const environment = new Environemt({
  network,
  store,
})

export default environment;
