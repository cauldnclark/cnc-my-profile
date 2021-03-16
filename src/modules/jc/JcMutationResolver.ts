import { JcService } from "./JcService";
import { JcCreate } from "./types";

export const jcMutationResolvers = {
  createJc: async (_: any, args: JcCreate) => {
    const jcService = new JcService();

    return jcService.create(args);
  },
};
