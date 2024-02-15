import asyncHandler from "express-async-handler";

import Story from "../../models/storyModel.js";

//@desc get all Story
//@route GET /story
//@access private

export const getAllStory = asyncHandler(async (req, res) => {
    try {
        console.log("get request is sent!!")
        const Stories = await Story.find();
        res.status(200).json(Stories);
    }
    catch (err) {
        console.error("Data not fetched!!", err);
        res.status(500).json({ message: "internal server error" });
    }
});

//@desc post Story
//@route POST /story
//@access public

export const createStory = asyncHandler(async (req, res) => {
    try {
        console.log(req.body);
        const { name, text, likeCount } = req.body;

        if (!name || !text) {
            res.status(400);
            throw new Error("All Fiels are mandatory!");
        }

        const story = Story.create({
            name, text, likeCount
        });

        console.log("data sent!!");

        res.status(201).json(story);
    }
    catch (err) {
        console.error("Data not fetched!!", err);
        res.status(500).json({ message: "internal server error" });
    }
});

//@desc delete Story
//@route DELETE /story
//@access public

export const deletePost = asyncHandler(async (req, res) => {

    try {
        const id = req.params.id;

        const data = await Story.findByIdAndDelete(id);

        if (!data) {
            return res.status(404).json({ message: "Data Not Found!!" });
        }

        res.json({ message: "Data Deleted Succesfully !!" });
    }
    catch (err) {
        console.error("Error deleting data !!", err);
        res.status(500).json({ message: 'Internal Server Error' });
    }


});

export default { getAllStory, createStory };