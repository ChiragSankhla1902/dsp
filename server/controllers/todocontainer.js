import express from "express";
import mongoose from "mongoose";
import Todo from "../models/model.js";

const router = express.Router();


export const  getcontact=async(req,res)=>{
    try {
        const blogcontent = await Todo.find();
        res.status(201).json(blogcontent)
        
    } catch (error) {
        console.log("hello")
        console.log(error.message)
        res.status(404)
    }
};

export const createcontact=async(req,res)=>{
       const {first_name,last_name,email} = req.body;
       const newblog =new Todo( {first_name,last_name,email} );
        
       try {
           await newblog.save();
           res.status(201).json(newblog);
       } catch (error) {
           console.log(error)
           res.status(404);
       }
};

// export const updatetask=async(req,res)=>{
    
//     const{id}=req.params;
//     const  {name,priority,duedate,status} = req.body;
//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
//     const updated= {name,priority,duedate,status,_id:id}
//     await Todo.findByIdAndUpdate(id,updated,{new:true});
//     res.send(updated);

// }

// export const deletetask=async(req,res)=>{
//     const{id}=req.params;
//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
//     await Todo.findByIdAndDelete(id);
//     res.json({ message: "Post deleted successfully." });
// }


export default router;