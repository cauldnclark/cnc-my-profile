import { JhondiService } from './jhondiService';
import { getJhondi } from './types';

export const jhondiResolvers = {
  getJc: async (_: any, args: getJhondi) => {
    const jcService = new JhondiService();

    return jcService.findById(args.id);
  },
};
