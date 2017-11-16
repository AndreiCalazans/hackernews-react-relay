/**
 * @flow
 * @relayHash fbba31518ca4eb0cdbd12320f266d8bc
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type UserListPageQueryResponse = {|
  +viewer: {| |};
|};
*/


/*
query UserListPageQuery {
  viewer {
    ...UserList_viewer
    id
  }
}

fragment UserList_viewer on Viewer {
  allUsers(first: 1) {
    pageInfo {
      hasNextPage
    }
    edges {
      node {
        ...User_user
        id
      }
    }
  }
}

fragment User_user on User {
  name
  createdAt
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "UserListPageQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "UserList_viewer",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "UserListPageQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "UserListPageQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
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
            "kind": "InlineFragment",
            "type": "Viewer",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 1,
                    "type": "Int"
                  }
                ],
                "concreteType": "UserConnection",
                "name": "allUsers",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "name": "pageInfo",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "hasNextPage",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "UserEdge",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "User",
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
                            "kind": "InlineFragment",
                            "type": "User",
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "name",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "createdAt",
                                "storageKey": null
                              }
                            ]
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "allUsers{\"first\":1}"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query UserListPageQuery {\n  viewer {\n    ...UserList_viewer\n    id\n  }\n}\n\nfragment UserList_viewer on Viewer {\n  allUsers(first: 1) {\n    pageInfo {\n      hasNextPage\n    }\n    edges {\n      node {\n        ...User_user\n        id\n      }\n    }\n  }\n}\n\nfragment User_user on User {\n  name\n  createdAt\n}\n"
};

module.exports = batch;
