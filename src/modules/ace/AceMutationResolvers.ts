import { AceService } from './AceService';
import { CreateAce, UpdateAce } from './types';

export const aceMutationResolvers = {
  createAce: async (_: any, args: CreateAce) => {
    const aceService = new AceService();

    return aceService.createAce(args);
  },

  updateAce: async (_: any, args: UpdateAce) => {
    const aceService = new AceService();

    return aceService.updateAce(args);
  },
};
