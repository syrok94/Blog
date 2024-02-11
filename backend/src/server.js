import storyRouter from "./routes/stories/storyRoute.js";
import express from "express";

import connectDB from "./config/dbConnection.js";

connectDB();

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use("/story" , storyRouter);

app.listen(port , ()=>{
    console.log(`server is running on port ${port}...`);
});