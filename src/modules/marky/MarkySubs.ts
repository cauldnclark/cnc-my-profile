import { MARKY_UPDATED, MARKY_CREATED, MARKY_DELETED  } from './../../constants';
import { pubsub } from '../pubsub';
import { withFilter } from 'graphql-subscriptions';
import { MarkyAlias, MarkyCreatedAlias, MarkyUpdatedAlias } from './types';

export const markySubscriptionResolvers = {
  markyCreated: {
    subscribe: withFilter(() => pubsub.asyncIterator([MARKY_CREATED]),
      (payload: MarkyCreatedAlias , variables:MarkyAlias) => {
        return payload.markyCreated.email === variables.alias;
      }
    ),
  },
  markyUpdated: {
    subscribe: withFilter(() => pubsub.asyncIterator([MARKY_UPDATED]),
        (payload: MarkyUpdatedAlias , variables:MarkyAlias) => {
          // ONLY LISTERN TO THE ONE AND ONLY MARKY WITH AN ID OF 6051780dd1b5eb2768f10ffc
          return payload.markyUpdated.id === variables.alias;
        } 
      ),
  },
  markyDeleted: {
    subscribe: () => pubsub.asyncIterator(MARKY_DELETED)
  }
};
