/**
 * @flow
 * @relayHash c0785709f6765d90e5f939a19ba796ef
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type NewVoteSubscriptionVariables = {| |};

export type NewVoteSubscriptionResponse = {|
  +Vote: ?{|
    +node: ?{|
      +id: string;
      +user: {|
        +id: string;
      |};
      +link: {|
        +id: string;
        +_votesMeta: {|
          +count: number;
        |};
      |};
    |};
  |};
|};
*/


/*
subscription NewVoteSubscription {
  Vote(filter: {mutation_in: [CREATED]}) {
    node {
      id
      user {
        id
      }
      link {
        id
        _votesMeta {
          count
        }
      }
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "NewVoteSubscription",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "filter",
            "value": {
              "mutation_in": [
                "CREATED"
              ]
            },
            "type": "VoteSubscriptionFilter"
          }
        ],
        "concreteType": "VoteSubscriptionPayload",
        "name": "Vote",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Vote",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "User",
                "name": "user",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Link",
                "name": "link",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "_QueryMeta",
                    "name": "_votesMeta",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "count",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "Vote{\"filter\":{\"mutation_in\":[\"CREATED\"]}}"
      }
    ],
    "type": "Subscription"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "NewVoteSubscription",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "NewVoteSubscription",
    "operation": "subscription",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "filter",
            "value": {
              "mutation_in": [
                "CREATED"
              ]
            },
            "type": "VoteSubscriptionFilter"
          }
        ],
        "concreteType": "VoteSubscriptionPayload",
        "name": "Vote",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Vote",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "User",
                "name": "user",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Link",
                "name": "link",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "_QueryMeta",
                    "name": "_votesMeta",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "count",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "Vote{\"filter\":{\"mutation_in\":[\"CREATED\"]}}"
      }
    ]
  },
  "text": "subscription NewVoteSubscription {\n  Vote(filter: {mutation_in: [CREATED]}) {\n    node {\n      id\n      user {\n        id\n      }\n      link {\n        id\n        _votesMeta {\n          count\n        }\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
