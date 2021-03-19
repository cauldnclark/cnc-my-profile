import { withFilter } from 'graphql-subscriptions';
import { CREATED_JHONDI, UPDATED_JHONDI } from './utils/constant';
import { jhondiCreatedAlias, jhondiUpdatedAlias, alias } from './types';
import { pubsub } from '../pubsub';

export const jhondiSubscriptionResolvers = {
  jhondiCreated: {
    subscribe: withFilter(
      () => pubsub.asyncIterator([CREATED_JHONDI]),
      (payload: jhondiCreatedAlias, variables: alias) => {
        return payload.jhondiCreated.alias === variables.alias;
      }
    ),
  },

  jhondiUpdated: {
    subscribe: withFilter(
      () => pubsub.asyncIterator([UPDATED_JHONDI]),
      (payload: jhondiUpdatedAlias, variables: alias) => {
        return payload.jhondiUpdated.alias === variables.alias;
      }
    ),
  },
};
