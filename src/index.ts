import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    hello: String
    hi(times: Int!): Float
  }
`;

type HiInput = {
  times: number;
};

const resolvers = {
  Query: {
    hello: () => "world",
    hi: (_: any, b: HiInput): number => {
      return 10 * b.times;
    },
  },
};

const app = new ApolloServer({
  typeDefs,
  resolvers,
});

app.listen(3002).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
