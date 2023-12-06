import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv"
import User from './models/User.js';

dotenv.config();

import {getApiHealths} from './controllers/health.js'

const app = express()
app.use(express.json());


app.get('/api/v1/healths', getApiHealths);

//signup api//

app.post('/signup' , async(req,res)=>{
    try{

    const{name,email,address,password,mobile}=req.body;
    const newUser= new User({
        name:name,
        email:email,
        password:password,
        mobile:mobile,
        address:address
    });

    const savedUser = await newUser.save();

    res.send({
        success:true,
        data:savedUser,
        message:"signup successfully !!!"
    })
}catch(e){
    res.send({
        success:false,
        message:e.message
    })
}

});

// login api//
app.post('/login' ,async(req,res)=>{
    try{
        const {email,password}=req.body;

        if(!email||!password){
            return res.send({
                success:false,
                message:"please fill all section"
            })
        }
        const response =await User.findOne({email:email,password:password});
    
       if(response){
        res.send(
            {
                success:true,
                data:response,
                message:"login successfuly!!!"
            }
        )
       }else{
        res.send({
            success:false,
            message:"please correct email and password"
        })
       }
    }catch(e){
        res.send({
            success:false,
            message:e.message
        })
    }
   
})
// login end//


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