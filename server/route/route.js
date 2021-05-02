import express from "express";
import {gettask,createtask,updatetask,deletetask} from "../controllers/todocontainer.js";

const route =express.Router();

route.get('/',gettask);
route.post('/create',createtask);
route.patch('/:id',updatetask);
route.delete('/:id',deletetask);


export default route;