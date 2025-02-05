//import dependencies
import cookieParser from "cookie-parser";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import authRouter from "./routers/authRouter.js";

//initialize express app
const app = express();


//parse json middleware to parse json request
app.use(cookieParser());
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.json({message:'Hello from the server'})
})

//load configurations and environmental variables
dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGOURL = process.env.MONGO_URL;

//connect to DB
mongoose
.connect(MONGOURL)
.then(() => {
    console.log("Database connected successfully.");
    app.listen(PORT, ()=> {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error) => console.log(error));

//create api endpoint
app.use("/api/auth", authRouter);