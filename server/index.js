import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv"

dotenv.config();

import {getApiHealths} from './controllers/health.js'

const app = express()
app.use(express.json());


app.get('/api/v1/healths', getApiHealths);

const connectionDB = () =>{

    const conn = mongoose.connect(process.env.MONGO_URI);

    if(conn){
        console.log("MongoDB connected Successfully.")
    }
}

connectionDB();

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})