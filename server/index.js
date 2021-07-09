import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import route from "./route/route.js";

const app=express();

app.use(bodyparser.json({limit:"30mb",extended:true}));
app.use(bodyparser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
app.use('/todo',route);

const Url='mongodb+srv://DSP_user:DSP_user@cluster0.m3q9j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT= process.env.PORT || 8000;

mongoose.connect(Url,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>console.log(`server running ${PORT}`)))
    .catch(()=>console.log(error));

mongoose.set('useFindAndModify',false);