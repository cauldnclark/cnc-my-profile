import AceSchema, { AceInterface } from './AceSchema';
import { CreateAce } from './types';

export class AceService {
  /** These methods are for queries */
  async findById(id: string): Promise<AceInterface> {
    return AceSchema.findById(id);
  }

  /** These methods are for mutations */
  async createAce(args: CreateAce): Promise<AceInterface> {
    const newAce = new AceSchema(args);

    return newAce.save();
  }
}
