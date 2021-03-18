import { IanService } from '../services/IanService';
import { GetIan } from '../types';

export const ianQueryResolvers = {

  /*
   *  GET ID
   * 
  */
  getIan: async (_: any, args: GetIan) => {
    const ianService = new IanService();

    return ianService.findById(args.id);
  },

  /*
   *  GET ALL
   * 
  */
  getAllIan: async (_: any) => {
    const ianService = new IanService();

    return ianService.getAllIan();
  },
};
