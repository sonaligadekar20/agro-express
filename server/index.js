import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv"
import User from './models/User.js';

dotenv.config();

import {getApiHealths} from './controllers/health.js'
import {postApiSignups, postApiLogins} from './controllers/user.js'

const app = express()
app.use(express.json());

const connectionDB = () =>{

    const conn = mongoose.connect(process.env.MONGO_URI);

    if(conn){
        console.log("MongoDB connected Successfully.")
    }
}

connectionDB();

app.get('/api/v1/healths', getApiHealths);

//signup api//

app.post('/api/v1/signups', postApiSignups);

// login api//
app.post('/api/v1/logins', postApiLogins);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
});