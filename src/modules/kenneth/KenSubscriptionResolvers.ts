import { withFilter } from 'graphql-subscriptions';
import { KEN_CREATED, KEN_UPDATED } from '../../constants';
import { pubsub } from '../pubsub';
import { KenAlias, KenCreatedAlias, KenUpdatedAlias } from './types';

export const KenSubscriptionResolvers = {
    kenCreated: {
        subscribe: withFilter(
            () => pubsub.asyncIterator([KEN_CREATED]),
            (payload: KenCreatedAlias, variables: KenAlias) => {
                return payload.kenCreated.name === variables.alias;
            }
        ),
    },

    kenUpdated: {
        subscribe: withFilter(
            () => pubsub.asyncIterator([KEN_UPDATED]),
            (payload: KenUpdatedAlias, variables: KenAlias) => {
                return payload.kenUpdated.id === variables.alias;
            }
        ),
    },


};
