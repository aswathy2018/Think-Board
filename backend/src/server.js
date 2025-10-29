import dotenv from "dotenv";
dotenv.config()
console.log("ENV TEST:", process.env.UPSTASH_REDIS_REST_URL, process.env.UPSTASH_REDIS_REST_TOKEN);
import express from "express";
import cors from "cors";

import noteRoutes from "./routes/noteRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/ratelimiter.js";


const app = express();
const PORT = process.env.PORT || 5001


//middleware
app.use(
    cors({
        origin: "http://localhost:5173",
    })
)
app.use(express.json())
app.use(rateLimiter)



app.use("/api/notes", noteRoutes);


connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server started on port",PORT)
    });
})
