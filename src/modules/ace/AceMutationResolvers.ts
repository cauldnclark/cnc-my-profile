import { AceService } from './AceService';
import { CreateAce } from './types';

export const aceMutationResolvers = {
  createAce: async (_: any, args: CreateAce) => {
    const aceService = new AceService();

    return aceService.createAce(args);
  },
};
