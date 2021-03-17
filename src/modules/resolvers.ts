import { jcMutationResolvers } from './jc/JcMutationResolver';
import { jcResolvers } from './jc/JcResolver';
import { jhondiMutationResolvers } from './jhondi/jhondiMutationResolver';
import { jhondiResolvers } from './jhondi/jhondiQueryResolver';
import { markyMutationResolvers } from './marky/markyMutationResolver';
import { markyResolvers } from './marky/markyResolver';

export const resolvers = {
  Query: {
    hello: () => 'world',
    ...jcResolvers,
    ...jhondiResolvers,
    ...markyResolvers,
  },
  Mutation: {
    ...jcMutationResolvers,
    ...jhondiMutationResolvers,
    ...markyMutationResolvers,
  },
};
