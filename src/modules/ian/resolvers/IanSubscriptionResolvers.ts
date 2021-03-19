import { withFilter } from 'graphql-subscriptions';
import { IAN_CREATED, IAN_UPDATED } from '../../../constants';
import { pubsub } from '../../pubsub';
import { IanAlias, IanCreatedAlias, IanUpdatedAlias } from '../types';

export const ianSubscriptionResolvers = {
  ianCreated: {
    subscribe: withFilter(
      () => pubsub.asyncIterator([IAN_CREATED]),
      (payload: IanCreatedAlias, variables: IanAlias) => {
        return payload.ianCreated.email === variables.alias;
      }
    ),
  },

  ianUpdated: {
    subscribe: withFilter(
      () => pubsub.asyncIterator([IAN_UPDATED]),
      (payload: IanUpdatedAlias, variables: IanAlias) => {
        return payload.ianUpdated.email === variables.alias;
      }
    ),
  },
};
