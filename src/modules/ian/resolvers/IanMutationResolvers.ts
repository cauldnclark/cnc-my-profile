import { IanService } from '../services/IanService';
import { CreateIan, UpdateIan } from '../types';

export const ianMutationResolvers = {

  /*
   *  CREATE IAN
   * 
  */
  createIan: async (_: any, args: CreateIan) => {
    const ianService = new IanService();

    return ianService.createIan(args);
  },


  /*
   *  UPDATE IAN
   * 
  */
  updateIan: async (_: any, args: UpdateIan) => {
    const ianService = new IanService();

    return ianService.updateIan(args);
  },
};
