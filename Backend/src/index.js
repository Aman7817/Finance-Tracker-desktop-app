import dotenv from "dotenv";

import connectDB from "./db/db.js";

import { app } from "./app.js";

dotenv.config({
    path: './env'
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8001, () => {
            console.log(`Server is running at Port: ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("MONGO DB connection failed!!!", err);
    })