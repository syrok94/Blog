import storyRouter from "./routes/stories/storyRoute.js";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/dbConnection.js";
import dotenv from "dotenv";


dotenv.config();

connectDB();

const port = process.env.PORT || 5000;

const app = express();

app.use(morgan("combined"));

app.use(express.json());
var whitlist = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200
};

app.use(cors(whitlist));

app.use("/story", storyRouter);

app.listen(port, () => {
    console.log(`server is running on port ${port}...`);
});


