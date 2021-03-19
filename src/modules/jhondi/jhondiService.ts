import JhondiSchema from './jhondiSchema';
import { createJhondi, responseJhondi, updateJhondi } from './types';
import { IJhondi } from './Document';
import dateToString from './utils/date';

export class JhondiService {
  // THESE METHODS ARE FOR MUTATIONS

  async create(args: createJhondi): Promise<responseJhondi> {
    try {
      const newJhondi = new JhondiSchema(args);
      const newDoc = await newJhondi.save();
      const { _id, age, name, email, createdAt, updatedAt } = newDoc;
      return {
        _id,
        age,
        name,
        email,
        createdAt: dateToString(createdAt),
        updatedAt: dateToString(updatedAt),
      };
    } catch (error) {
      throw new Error(error);
    }
  }

  // THESE METHODS ARE FOR QUERIES

  async findById(id: string): Promise<responseJhondi> {
    try {
      const findID: any = await JhondiSchema.findById(id);
      const { _id, age, name, email, createdAt, updatedAt } = findID;
      return {
        _id,
        age,
        name,
        email,
        createdAt: dateToString(createdAt),
        updatedAt: dateToString(updatedAt),
      };
    } catch (error) {
      throw new Error(error);
    }
  }

  /*
   * @params: id of String and data
   * @return: new udpatedDocument
   */
  async update(data: updateJhondi): Promise<responseJhondi> {
    try {
      const { id, where } = data;
      const { name, age, email } = where;
      const updatedDoc = await JhondiSchema.findByIdAndUpdate(
        id,
        { name, age, email },
        {
          new: true,
        }
      );

      const {
        _id,
        name: updatedName,
        age: updatedAge,
        email: updatedEmail,
        createdAt,
        updatedAt,
      } = updatedDoc;

      return {
        _id,
        name: updatedName,
        age: updatedAge,
        email: updatedEmail,
        createdAt: dateToString(createdAt),
        updatedAt: dateToString(updatedAt),
      };
    } catch (error) {
      throw new Error(error);
    }
  }

  /*
   * @return array of documents
   */
  async findAll(): Promise<IJhondi[]> {
    return await JhondiSchema.find({});
  }
}
