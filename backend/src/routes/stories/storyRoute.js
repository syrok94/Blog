import express from "express";
import {getAllStory , createStory , deletePost} from "./storyController.js";

const router = express.Router();

router.get("/" , getAllStory);

router.post("/" ,createStory);

router.delete("/:id" , deletePost);
export default router;