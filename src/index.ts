import { ApolloServer, gql } from "apollo-server";
import models, { connectDb } from "./models/index";

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

// If you want to re-initialize your database on every Express server start,
// you can add a condition to your function
const eraseDatabaseOnSync: boolean = true;

connectDb().then(async () => {
  console.log("Connected to MongoDB");
  if (eraseDatabaseOnSync) {
    await Promise.all([
      models.User.deleteMany({}),
      models.Message.deleteMany({}),
    ]);
    createUsersWithMessages();
  }

  app.listen(process.env.PORT || 5000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`); // env variables aren't displaying IDK why
  });
});

const createUsersWithMessages = async () => {
  const { User, Message } = models;

  const user1 = new User({
    // Create a new user from Usermodel
    username: "MarkyMarky",
  });

  const message1 = new Message({
    text: "My First Message",
    user: user1.id, // set the user field to user1.id
  });

  const user2 = new User({
    // Create a new user from Usermodel
    username: "Baby",
  });

  const message2 = new Message({
    text: "Hi, How are you marky?",
    user: user1.id, // set the user field to user1.id
  });

  // Save new user and new message
  await message1.save();
  await user1.save();

  // Save new user and new message
  await message2.save();
  await user2.save();
};
