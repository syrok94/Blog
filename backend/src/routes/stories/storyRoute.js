import express from "express";
import {getAllStory , createStory} from "./storyController.js";

const router = express.Router();

router.get("/" , getAllStory);

router.post("/" ,createStory);


export default router;