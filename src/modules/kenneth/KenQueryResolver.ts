import { KenService } from "./KenService";
import { GetKen } from "./types";

export const KenQueryResolvers = {
  getKen: async (_: any, args: GetKen) => {
    const kenService = new KenService();

    return kenService.findById(args.id);
  },

  getAllKen: async (_: any) => {
    const kenService = new KenService();
    return await kenService.findAll();
  },
};
