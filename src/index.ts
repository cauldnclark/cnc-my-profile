import { ApolloServer, gql } from "apollo-server";
import { typeDefs } from "./modules/typeDefs";
import { resolvers } from "./modules/resolvers";

const app = new ApolloServer({
  typeDefs,
  resolvers,
});

// If you want to re-initialize your database on every Express server start,
// you can add a condition to your function
const eraseDatabaseOnSync: boolean = true;

app.listen(process.env.PORT || 5000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`); // env variables aren't displaying IDK why
});
