import { MARKY_CREATED, MARKY_DELETED, MARKY_UPDATED } from './../../constants';
import { MarkyService } from "./MarkyService";
import { MarkyInput, UpdateMarky, MarkyNotification, GetMarky } from "./types";
import { pubsub } from '../pubsub';

export const markyMutationResolvers = {
  
  createMarky: async (_: any, { input }: MarkyInput) => {
    const markyService = new MarkyService();
    const created = await markyService.create(input);
    pubsub.publish(MARKY_CREATED, { markyCreated: created });
    return created
  },

  updateMarky: async (_: any, args: UpdateMarky) => {
    const markyService = new MarkyService();
    const updated =  await markyService.updateMarky(args);
    pubsub.publish(MARKY_UPDATED, { markyUpdated: updated });

    return updated
  },

  deleteMarky: async ( _:any, { id }:GetMarky):Promise<MarkyNotification> => {
   const markyService = new MarkyService();
   pubsub.publish(MARKY_DELETED, { markyDeleted: `A Marky with an ID:[${id}] was DELETED` });
   return await markyService.delete(id);
  }


};
