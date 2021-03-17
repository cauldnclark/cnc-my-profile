import { gql } from 'apollo-server';
import { aceMutationTypeDefs } from './ace/AceMutationTypesDefs';

export const typeDefs = gql`
  type Query {
    hello: String
    hi(times: Int!): Float
    getJc(id: String): Jc
    getJhondi(id: String): Jhondi!
    getAllJhondi: [Jhondi]
    getMarky(id: ID!): Marky
    getAllMarky: [Marky]!
  }

  type Mutation {
    createJc(name: String, age: Int, email: String): Jc
    createJhondi(name: String!, age: Int, email: String): Jhondi
    updateJhondi(id: String, where: InputJhondi!): Jhondi
    createMarky(input: MarkyInput): Marky
    updateMarky(id: ID!, input: MarkyInput): Marky

    ${aceMutationTypeDefs}
  }

  input MarkyInput {
    name: String
    age: Int
    email: String
    facebook: String
  }

  type Jc {
    _id: String
    name: String
    age: Int
    email: String
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

  type Marky {
    _id: String
    name: String
    age: Int
    email: String
    facebook: String
    createdAt: String
    updatedAt: String
  }

  type Ace {
    _id: String
    name: String
    age: Int
    email: String
  }
`;
