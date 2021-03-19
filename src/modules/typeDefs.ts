import { gql } from 'apollo-server';
import { aceQueryTypeDefs } from './ace/AceQueryTypeDefs';
import { aceMutationTypeDefs } from './ace/AceMutationTypeDefs';
import { aceType } from './ace/AceType';

import { ianMutationTypeDefs } from './ian/type-defs/IanMutationTypeDefs';
import { ianQueryTypeDefs } from './ian/type-defs/IanQueryTypeDefs';
import { ianMutationSubscriptions } from './ian/subscriptions/IanMutationSubscriptions';
import { ianType } from './ian/types/IanType';

export const typeDefs = gql`
  type Query {
    hello: String
    hi(times: Int!): Float
    getJc(id: String): Jc
    getJhondi(id: String): Jhondi!
    getAllJhondi: [Jhondi]
    getMarky(id: ID!): Marky
    getAllMarky: [Marky]!

    ${aceQueryTypeDefs}

    ${ianQueryTypeDefs}
  }

  type Mutation {
    createJc(name: String, age: Int, email: String): Jc
    createJhondi(name: String!, age: Int, email: String): Jhondi
    updateJhondi(id: String, where: InputJhondi!): Jhondi
    createMarky(input: MarkyInput): Marky
    updateMarky(id: ID!, input: MarkyInput): Marky
    deleteMarky(id:ID): MarkyNotification
    ${aceMutationTypeDefs}

    ${ianMutationTypeDefs}
  }


  type Subscription {
    jcCreated(alias: String!): Jc

    ${ianMutationSubscriptions}
  }

  type Marky {
    id:         ID
    name:       String
    age:        Int
    email:      String
    facebook:   String
    createdAt:  String
    updatedAt:  String
    status:     String
  }

  input MarkyInput {
    name: String
    age: Int
    email: String
    facebook: String
  }
  type MarkyNotification {
        id:      ID
        message: String!
        status:  Boolean
    }
  type Jc {
    _id: String
    name: String
    age: Int
    email: String
    alias: String
  }

  input InputJhondi {
    name: String!
    age: Int!
    email: String!
  }

  type Jhondi {
    _id: String!
    name: String!
    age: Int!
    email: String!
    createdAt: String
    updatedAt: String
  }



  ${aceType}

  ${ianType}
`;
