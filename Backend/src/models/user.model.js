import mongoose from "mongoose";



const userSchema = newschema(
    {

        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            index: true
        },

        fullname: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true
        },

        password: {
            type: String,
            required: [true,"Password is required "],
        },
        refreshToken: {
            type: String,
        },
        
        
}, {
    timestamps: true
});



export const User = mongoose.model("User",userSchema);