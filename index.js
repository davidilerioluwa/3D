import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import dalleRoutes from "./routes/dalle.routes.js"
import path from "path"
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);
console.log('directory-name 👉️', __dirname);

// 👇️ "/home/borislav/Desktop/javascript/dist/index.html"
// console.log(path.join(__dirname, '/dist', 'index.html'))

dotenv.config()
const app=express()
app.use(express.static(path.join(__dirname,"build")))
app.get("/*",(req,res)=>{
    res.sendFile(path.join(__dirname,"build","index.html"))
})

app.use(cors())
app.use(express.json({limit:"50mb"}))

app.use('/api/v1/dalle', dalleRoutes);

app.get("/",(req,res)=>{
    res.status(200).json({message:"hello"})
})

app.listen(3001,()=>{
    console.log('server started on port 3001');
})