import { IanService } from '../services/IanService';
import { CreateIan, UpdateIan } from '../types';
import { pubsub } from '../../pubsub';
import { IAN_ALIAS, IAN_CREATED, IAN_UPDATED } from '../../../constants';


export const ianMutationResolvers = {

  /*
   *  CREATE IAN
   * 
  */
  createIan: async (_: any, args: CreateIan) => {
    const ianService = new IanService();

    const resp = await ianService.createIan(args);

    pubsub.publish(IAN_CREATED, { ianCreated: resp });

    return ianService.createIan(args);
  },


  /*
   *  UPDATE IAN
   * 
  */
  updateIan: async (_: any, args: UpdateIan) => {
    const ianService = new IanService();

    const resp = await ianService.updateIan(args);

    pubsub.publish(IAN_UPDATED, { ianUpdated: resp });

    return ianService.updateIan(args);
  },
};
