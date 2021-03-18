import { IanService } from '../services/IanService';
import { GetIan } from '../types';

export const ianQueryResolvers = {
  getIan: async (_: any, args: GetIan) => {
    const ianService = new IanService();

    return ianService.findById(args.id);
  },

  getAllIan: async (_: any) => {
    const ianService = new IanService();

    return ianService.getAllIan();
  },
};
