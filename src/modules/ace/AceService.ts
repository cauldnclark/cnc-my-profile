import AceSchema, { AceInterface } from './AceSchema';
import { CreateAce, UpdateAce } from './types';

export class AceService {
  /** These methods are for queries */
  async findById(id: string): Promise<AceInterface | Error> {
    const ace = await AceSchema.findById(id);

    if (ace === null) {
      return new Error(`No record found with the given ID: ${id}`);
    }

    return AceSchema.findById(id);
  }

  /** These methods are for mutations */
  async createAce(args: CreateAce): Promise<AceInterface | Error> {
    try {
      const newAce = new AceSchema(args);

      return newAce.save();
    } catch (error) {
      return new Error(`${error.message}`);
    }
  }

  async updateAce(args: UpdateAce): Promise<AceInterface | Error> {
    const ace = await AceSchema.findById(args.id);

    if (ace === null) {
      return new Error(`No record found with the given ID: ${args.id}`);
    }

    delete args.id;

    const updateFields: string[] = Object.keys(args);

    updateFields.forEach((field) => {
      ace[field] = args[field];
    });

    return ace.save();
  }
}
