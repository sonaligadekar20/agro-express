import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv"
import path from 'path';


dotenv.config();

import {getApiHealths} from './controllers/health.js'
import {postApiSignups, postApiLogins} from './controllers/user.js';
import {postApiProduct,getApiProductsById} from './controllers/product.js';

const app = express()
app.use(express.json());

const __dirname = path.resolve();

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

//products api
app.post('/api/v1/products', postApiProduct);


app.get('/api/v1/products/user/:id', getApiProductsById);  //for populate by user

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
  
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
    });
  }

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
});