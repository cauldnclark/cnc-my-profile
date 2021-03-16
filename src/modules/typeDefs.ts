import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    hello: String
    hi(times: Int!): Float
    getJc(id: String): Jc
  }

  type Mutation {
    createJc(name: String, age: Int, email: String): Jc
  }

  type Jc {
    _id: String
    name: String
    age: Int
    email: String
  }
`;
