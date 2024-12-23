import mongoose from "mongoose";

const incomeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true
  },
  source: {
    type: String,
    required: true,
    enum: ['Salary', 'Freelancing', 'Investments', 'Business', 'Gifts', 'Other'] 
  },
  amount: {
    type: Number,
    required: true,
    min: 0 
  },
  description: {
    type: String,
    maxlength: 200 
  },
  
 
},{timestamps:true});



export const Income = mongoose.model('Income', incomeSchema);
