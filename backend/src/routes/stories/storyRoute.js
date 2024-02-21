import express from "express";
import {getAllStory , createStory , deletePost} from "./storyController.js";


export const checkLoggedIn = (req,res,next) =>{

    const isLogged = true;

    if(!isLogged){
        
        return (
            res.status(404).json({error: " you must logged In !!"})
        
        );
    }

    next();
}

const router = express.Router();

router.get("/" ,  getAllStory);

router.post("/" ,createStory);

router.delete("/:id" ,checkLoggedIn ,  deletePost);
export default router;