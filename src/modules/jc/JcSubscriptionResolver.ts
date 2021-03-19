import { withFilter } from 'graphql-subscriptions';
import { JC_CREATED } from '../../constants';
import { pubsub } from '../pubsub';
import { JcAlias, JcCreatedAlias } from './types';

export const jcSubscriptionResolvers = {
  jcCreated: {
    subscribe: withFilter(
      () => pubsub.asyncIterator([JC_CREATED]),
      (payload: JcCreatedAlias, variables: JcAlias) => {
        console.log({
          payload,
          variables,
        });
        return payload.jcCreated.email === variables.alias;
      }
    ),
  },
};
