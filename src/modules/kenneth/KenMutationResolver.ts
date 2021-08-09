import { KEN_UPDATED } from './../../constants';
import { KEN_CREATED } from '../../constants';
import { pubsub } from '../pubsub';
import { KenService } from './KenService';
import { KenCreate, UpdateKen } from './types';

export const KenMutationResolvers = {

    createKen: async (_: any, args: KenCreate) => {
        const kenService = new KenService();

        const resp = await kenService.create(args);
        pubsub.publish(KEN_CREATED, { kenCreated: resp });
        return resp;
    },

    updateKen: async (_: any, args: UpdateKen) => {
        const kenService = new KenService();

        const resp = await kenService.updateKen(args);

        pubsub.publish(KEN_UPDATED, { kenUpdated: resp });

        return kenService.updateKen(args);
    },

};
