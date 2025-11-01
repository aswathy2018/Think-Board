import dotenv from "dotenv";
dotenv.config()
console.log("ENV TEST:", process.env.UPSTASH_REDIS_REST_URL, process.env.UPSTASH_REDIS_REST_TOKEN);
import express from "express";
import cors from "cors";
import path from "path"

import noteRoutes from "./routes/noteRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";


const app = express();
const PORT = process.env.PORT || 5001
const __dirname = path.resolve()

//middleware
if(process.env.NODE_ENV !== "production"){
    app.use(
        cors({
            origin: "https://think-board-flame.vercel.app",
        })
    )
}

app.use(express.json())
app.use(rateLimiter)



app.use("/api/notes", noteRoutes);

// if(process.env.NODE_ENV === "development") {
//     app.use(express.static(path.join(__dirname, "../frontend/dist")))

//     // app.get("*", (req, res) => {
//     //     res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
//     // })

//     app.use((req, res) => {
//         res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
//     });

// }

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server started on port",PORT)
    });
})

