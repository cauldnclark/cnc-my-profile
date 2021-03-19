import { MarkyService } from "./MarkyService";
import { MarkyInput, UpdateMarky, MarkyNotification, GetMarky } from "./types";

export const markyMutationResolvers = {
  
  createMarky: async (_: any, { input }: MarkyInput) => {
    const markyService = new MarkyService();
    return await markyService.create(input);
  },

  updateMarky: async (_: any, args: UpdateMarky) => {
    const markyService = new MarkyService();
    return await markyService.updateMarky(args);
  },

  deleteMarky: async ( _:any, { id }:GetMarky):Promise<MarkyNotification> => {
   const markyService = new MarkyService();
   return await markyService.delete(id);
  }


};
