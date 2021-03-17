import { jcMutationResolvers } from './jc/JcMutationResolver';
import { jcResolvers } from './jc/JcResolver';
import { jhondiMutationResolvers } from './jhondi/jhondiMutationResolver';
import { jhondiResolvers } from './jhondi/jhondiQueryResolver';

export const resolvers = {
  Query: {
    hello: () => 'world',
    ...jcResolvers,
    ...jhondiResolvers,
  },
  Mutation: {
    ...jcMutationResolvers,
    ...jhondiMutationResolvers,
  },
};
