/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type UserList_viewer = {|
  +allUsers: {|
    +pageInfo: {|
      +hasNextPage: ?boolean;
    |};
    +edges: ?$ReadOnlyArray<?{|
      +node: {| |};
    |}>;
  |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "count",
      "type": "Int",
      "defaultValue": 1
    },
    {
      "kind": "LocalArgument",
      "name": "filter",
      "type": "UserFilter",
      "defaultValue": null
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserList_viewer",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "filter",
          "variableName": "filter",
          "type": "UserFilter"
        },
        {
          "kind": "Variable",
          "name": "first",
          "variableName": "count",
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
                  "kind": "FragmentSpread",
                  "name": "User_user",
                  "args": null
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
  "type": "Viewer"
};

module.exports = fragment;
