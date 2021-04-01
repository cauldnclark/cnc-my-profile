import { JC_ALIAS, JC_CREATED } from '../../constants';
import { pubsub } from '../pubsub';
import { JcService } from './JcService';
import { JcCreate } from './types';

export const jcMutationResolvers = {
  createJc: async (_: any, args: JcCreate) => {
    const jcService = new JcService();
    const resp = await jcService.create(args);
    pubsub.publish(JC_CREATED, { jcCreated: resp });
    return resp;
  },
};
