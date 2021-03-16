import { jcMutationResolvers } from "./jc/JcMutationResolver";
import { jcResolvers } from "./jc/JcResolver";

export const resolvers = {
  Query: {
    hello: () => "world",
    ...jcResolvers,
  },
  Mutation: {
    ...jcMutationResolvers,
  },
};
