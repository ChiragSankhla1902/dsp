import express from "express";
import {getcontact,createcontact} from "../controllers/todocontainer.js";

const route =express.Router();

route.get('/',getcontact);
route.post('/create',createcontact);
// route.patch('/:id',updatetask);
// route.delete('/:id',deletetask);


export default route;