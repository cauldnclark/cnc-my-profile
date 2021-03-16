import mongoose, { Mongoose} from 'mongoose';
 
import User from './UserModel';
import Message from './MessageModel';

 //mongodb+srv://pyakz:pyakz@trial-cnc.djxfp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const connectDb = ():Promise<Mongoose> => {
    try {
        return mongoose.connect('mongodb://localhost/trial-database', { useNewUrlParser: true, useUnifiedTopology: true });
    } catch (error) {
        console.log("[STATUS]: Could not connect");
    }
};
 
const models = { User, Message };
 
export { connectDb };
 
export default models;