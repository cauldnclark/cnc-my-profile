import { MarkyService } from "./markyService";
import { MarkyInput, UpdateMarky} from "./types";

export const markyMutationResolvers = {
  createMarky: async (_: any, { input }: MarkyInput) => {
    const markyService = new MarkyService();
    return await markyService.create(input);
  },

  updateMarky: async (_: any, args: UpdateMarky) => {
    const markyService = new MarkyService();
    return await markyService.updateMarky(args)
  },
};
