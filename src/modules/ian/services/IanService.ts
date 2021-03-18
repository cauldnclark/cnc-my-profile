import IanSchema, { IanInterface } from '../schemas/IanSchema';
import { CreateIan, UpdateIan } from '../types';

export class IanService {
    
  /** 
   * GET METHOD: 
   *  _id
   *  name
   *  age
   *  email
   *  createdAt
   *  updatedAt
   * http://localhost:5000/
   *   
   */
  async findById(id: string): Promise<IanInterface | Error> {
    const ian = await IanSchema.findById(id);

    if (ian === null) {
      return new Error(`No record found with the given ID: ${id}`);
    }

    return IanSchema.findById(id);
  }

  /** 
   * GET METHOD: All Ian
   *  _id
   *  name
   *  age
   *  email
   *  createdAt
   *  updatedAt
   * http://localhost:5000/
   *   
   */

  async getAllIan(): Promise<IanInterface[] | Error> {
    try {
      return IanSchema.find();
    } catch (error) {
      return new Error(`${error.message}`);
    }
  }

  /** 
   * POST METHOD: Create Ian 
   *  name
   *  age
   *  email
   * http://localhost:5000/
   *   
   */
  async createIan(args: CreateIan): Promise<IanInterface | Error> {
    try {
      const newIan = new IanSchema(args);

      return newIan.save();
    } catch (error) {
      return new Error(`${error.message}`);
    }
  }

  /** 
   * PUT/PATCH METHOD: Update specific Ian 
   *  name
   *  age
   *  email
   * http://localhost:5000/
   *   
   */
  async updateIan(args: UpdateIan): Promise<IanInterface | Error> {
    const ian = await IanSchema.findById(args.id);

    if (ian === null) {
      return new Error(`No record found with the given ID: ${args.id}`);
    }

    delete args.id;

    const updateFields: string[] = Object.keys(args);

    updateFields.forEach((field) => {
      ian[field] = args[field];
    });

    return ian.save();
  }
}
