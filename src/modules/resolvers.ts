import { markyMutationResolvers } from './marky/markyMutationResolver';
import { markyResolvers } from './marky/markyResolver';
import { jcMutationResolvers } from "./jc/JcMutationResolver";
import { jcResolvers } from "./jc/JcResolver";

export const resolvers = {
  Query: {
    hello: () => "world",
    ...jcResolvers,
    ...markyResolvers

  },
  Mutation: {
    ...jcMutationResolvers,
    ...markyMutationResolvers
  },
};
