import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    hello: String
    hi(times: Int!): Float
    getJc(id: String): Jc
    getJhondi(id: String): Jhondi
    getAllJhondi: [Jhondi]!
  }

  type Mutation {
    createJc(name: String, age: Int, email: String): Jc
    createJhondi(name: String!, age: Int, email: String): Jhondi
    updateJhondi(id: String, where: InputJhondi!): Jhondi
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
    _id: String
    name: String
    age: Int
    email: String
  }
`;
