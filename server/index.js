import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import { authRouter, userRouter, listingRouter } from "./routes/index.js"
import path from "path"
dotenv.config()

mongoose
.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Connected to mongodb")
})
.catch((err)=>{
    console.log(err)
})

const __dirname = path.resolve()

const app = express()
app.use(express.json())
app.use(cookieParser())
const PORT = process.env.PORT || 8000


app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)
app.use("/api/listing", listingRouter);


app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message  = err.message || "Internal Server Error"
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})

app.listen(8000, ()=>{
    console.log(`server running on PORT ${PORT}`)
})