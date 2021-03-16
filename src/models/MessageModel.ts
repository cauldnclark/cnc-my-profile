import mongoose from 'mongoose';
 
const messageSchema = new mongoose.Schema({
    text: {
      type: String,
      required: true,
    },
    user: { 
      type: mongoose.Schema.Types.ObjectId, ref: 'User'  // Reference to USER Model
      } 

  },
  { timestamps: true },
);
 
const Message = mongoose.model('Message', messageSchema);
 
export default Message;