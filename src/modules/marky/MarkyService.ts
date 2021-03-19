import MarkySchema from "./MarkySchema";
import { UpdateMarky, MarkyCreate, MarkyNotification, StatusMarky } from "./types";
import { Marky } from "./MarkySchema";

export class MarkyService {

  //HELPERS FUNCTION FOR MARKY
  Notification = (id:string, status: boolean) => {
    let message =  status === false ? `Error: Cannot find Marky with an ID:${id} `: "Marky is DELETED" 
    return {
      id,
      status,
      message
    }
  }

  // THESE METHODS ARE FOR QUERIES

  async findById(id: string): Promise<Marky> {
    const foundMarky = await MarkySchema.findById(id);
    return foundMarky;
  }

  async findAll(): Promise<Marky[]> {
    const foundMarky = await MarkySchema.find();
    return foundMarky;
  }

  // THESE METHODS ARE FOR MUTATIONS

  async create(args: MarkyCreate): Promise<Marky> {
    const newMarky = new MarkySchema(args);
    return await newMarky.save();
  }

  async updateMarky({id, input}: UpdateMarky): Promise<Marky | StatusMarky> {
    // Find MARKY FIRST before updating
    const doesMarkyExist = await this.findById(id)

    if(doesMarkyExist !== null) { 
      return await MarkySchema.findByIdAndUpdate(id,input, { new: true, useFindAndModify: false });
    } else {
      return { status: 'Marky Doesnot Exist' }
    }

  }

  async delete(id:string):Promise<MarkyNotification> {

    // Find MARKY FIRST before removing
    const doesMarkyExist = await this.findById(id)
    if(doesMarkyExist !== null) {
      await MarkySchema.findOneAndDelete({ _id: id })
      return this.Notification(id, true)
    } else {
      return this.Notification(id, false)
    }
   
  }


  
}