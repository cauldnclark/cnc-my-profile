import { ApolloServer } from 'apollo-server';
import { typeDefs } from './modules/typeDefs';
import { resolvers } from './modules/resolvers';

const app = new ApolloServer({
  typeDefs,
  resolvers,
});

app.listen(process.env.PORT || 5000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`); // env variables aren't displaying IDK why
});
