import { JhondiService } from './jhondiService';
import { getJhondi } from './types';

export const jhondiResolvers = {
  getJhondi: async (_: any, args: getJhondi) => {
    const jhondiService = new JhondiService();

    return jhondiService.findById(args.id);
  },
  /*
   * @params: none
   * @return: it will return list of all documents under the jhondi schema
   */
  getAllJhondi: async (_: any) => {
    return new JhondiService().findAll();
  },
};
