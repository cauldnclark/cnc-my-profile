import { MarkyService } from "./MarkyService";
import { GetMarky } from "./types";

export const markyResolvers = {

  getMarky: async (_: any, args: GetMarky) => {
    const markyService = new MarkyService();
    return await markyService.findById(args.id);
  },
  
  getAllMarky: async (_: any) => {
    const markyService = new MarkyService();
    return await markyService.findAll();
  },
};
