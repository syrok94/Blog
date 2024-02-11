import asyncHandler from "express-async-handler";

import Story from "../../models/storyModel.js";

//@desc get all Story
//@route GET /story
//@access private

export const getAllStory = asyncHandler(async (req, res) => {
    console.log("get request is sent!!")
    const Stories = await Story.find();
    res.status(200).json(Stories);
});

//@desc post Story
//@route POST /story
//@access public

export const createStory =asyncHandler(async (req, res) => {
    console.log(req.body);
    const {name , text , likeCount} = req.body;

    if(!name || !text ){
        res.status(400);
        throw new Error("All Fiels are mandatory!");
    }

    const story = Story.create({
        name,text,likeCount
    });

    console.log("data sent!!");

    res.status(201).json(story);
}
);

export default {getAllStory , createStory};