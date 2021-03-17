import { JhondiService } from './jhondiService';
import { createJhondi, updateJhondi } from './types';

export const jhondiMutationResolvers = {
  createJhondi: async (_: any, args: createJhondi) => {
    const jhondiService = new JhondiService();

    return jhondiService.create(args);
  },

  updateJhondi: async (_: any, args: updateJhondi) => {
    const jhondiService = new JhondiService();
    return jhondiService.update(args);
  },
};
