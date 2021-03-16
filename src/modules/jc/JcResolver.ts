import { JcService } from "./JcService";
import { GetJc } from "./types";

export const jcResolvers = {
  getJc: async (_: any, args: GetJc) => {
    const jcService = new JcService();

    return jcService.findById(args.id);
  },
};
