import mongoose, { Schema } from "mongoose";


const expenseSchema = new Schema(
    {


        userId: {
            type: mongoose.Schema.Types.ObjectId, // Reference to the User model
            ref: 'User',
            required: true
        },
        category: {
            type: String,
            required: true,
            enum: ['Food', 'Transport', 'Bills', 'Shopping', 'Entertainment', 'Health', 'Others'] // Predefined categories
        },
        amount: {
            type: Number,
            required: true,
            min: 0 // Ensure no negative expenses
        },
        description: {
            type: String,
            maxlength: 200 // Optional short description
        },
  
   
},{timeseries: true});



export const Expense = mongoose.model('Expense', expenseSchema);

    