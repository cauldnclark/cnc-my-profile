import { JhondiService } from './jhondiService';
import { getJhondi } from './types';

export const jhondiResolvers = {
  getJhondi: async (_: any, args: getJhondi) => {
    const jhondiService = new JhondiService();

    return jhondiService.findById(args.id);
  },

  getAllJhondi: async (_: any) => {
    return new JhondiService().findAll();
  },
};
