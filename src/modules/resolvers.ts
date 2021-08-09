import { KenQueryResolvers } from './kenneth/KenQueryResolver';
import { jcMutationResolvers } from './jc/JcMutationResolver';
import { jcResolvers } from './jc/JcResolver';
import { jhondiMutationResolvers } from './jhondi/jhondiMutationResolver';
import { jhondiResolvers } from './jhondi/jhondiQueryResolver';
import { markyMutationResolvers } from './marky/markyMutationResolver';
import { markyResolvers } from './marky/markyResolver';
import { aceQueryResolvers } from './ace/AceQueryResolvers';
import { aceMutationResolvers } from './ace/AceMutationResolvers';
import { ianMutationResolvers } from './ian/resolvers/IanMutationResolvers';
import { ianQueryResolvers } from './ian/resolvers/IanQueryResolvers';
import { jcSubscriptionResolvers } from './jc/JcSubscriptionResolver';
import { ianSubscriptionResolvers } from './ian/resolvers/IanSubscriptionResolvers';
import { jhondiSubscriptionResolvers } from './jhondi/jhondiSubscription';
import { markySubscriptionResolvers } from './marky/MarkySubs';
import { KenMutationResolvers } from './kenneth/KenMutationResolver';

export const resolvers = {
  Query: {
    hello: () => 'world',
    ...jcResolvers,
    ...jhondiResolvers,
    ...markyResolvers,
    ...aceQueryResolvers,
    ...ianQueryResolvers,
    ...KenQueryResolvers
  },

  Mutation: {
    ...jcMutationResolvers,
    ...jhondiMutationResolvers,
    ...markyMutationResolvers,
    ...aceMutationResolvers,
    ...ianMutationResolvers,
    ...KenMutationResolvers
  },

  Subscription: {
    ...jcSubscriptionResolvers,
    ...ianSubscriptionResolvers,
    ...jhondiSubscriptionResolvers,
    ...markySubscriptionResolvers
  },
};
