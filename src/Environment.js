import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import { SubscriptionClient } from 'subscriptions-transport-ws';

import {GC_AUTH_TOKEN} from './constants';
const store = new Store(new RecordSource());

const fetchQuery = (operation, variables) => { 
  return fetch('https://api.graph.cool/relay/v1/cj5zkeqs96v0u01047kxj21wg', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem(GC_AUTH_TOKEN)}`
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json()
  })
};

const setupSubscription = (config, variables, cacheConfig, observer) => {
  const query = config.text
 
  const subscriptionClient = new SubscriptionClient('wss://subscriptions.us-west-2.graph.cool/v1/cj5zkeqs96v0u01047kxj21wg', {reconnect: true})
  subscriptionClient.subscribe({query, variables}, (error, result) => {
    observer.onNext({data: result})
  })
 }

const network = Network.create(fetchQuery, setupSubscription);

const environment = new Environment({
  network,
  store,
})

export default environment;
