import { CREATED_JHONDI, UPDATED_JHONDI } from './utils/constant';
import { JhondiService } from './jhondiService';
import { createJhondi, updateJhondi } from './types';
import { pubsub } from '../pubsub';

export const jhondiMutationResolvers = {
  createJhondi: async (_: any, args: createJhondi) => {
    const jhondiService = new JhondiService();
    const createResponse = await jhondiService.create(args);
    const { _id, name, age, email, createdAt, updatedAt } = createResponse;
    pubsub.publish(CREATED_JHONDI, {
      jhondiCreated: {
        alias: CREATED_JHONDI,
        _id,
        name,
        age,
        email,
      },
    });
    return createResponse;
  },

  updateJhondi: async (_: any, args: updateJhondi) => {
    const jhondiService = new JhondiService();
    const updated = await jhondiService.update(args);
    const { _id, name, age, email, createdAt, updatedAt } = updated;
    pubsub.publish(UPDATED_JHONDI, {
      jhondiUpdated: {
        alias: UPDATED_JHONDI,
        _id,
        name,
        age,
        email,
      },
    });
    return updated;
  },
};
