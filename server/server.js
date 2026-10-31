import "dotenv/config";
import express from "express";
import cors from "cors"
import { connectDb } from "./config/db.js";
import { serve } from "inngest/express";
import {inngest,functions} from "./inngest/index.js"
const app=express();
await connectDb();
//middleware
app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>res.send("App is live"));
app.use("/api/inngest",serve({ client: inngest, functions }))
const port=process.env.PORT || 4000;

app.listen(port,()=>console.log(`server is live on http://localhost:${port}`));


