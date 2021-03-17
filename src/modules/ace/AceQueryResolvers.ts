import { AceService } from './AceService';
import { GetAce } from './types';

export const aceQueryResolvers = {
  getAce: async (_: any, args: GetAce) => {
    const aceService = new AceService();

    return aceService.findById(args.id);
  },
};
