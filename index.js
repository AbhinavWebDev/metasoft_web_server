import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"
import AuthRoute from './Routes/AuthRoute.js'
import enquiryRoute from './Routes/enquiryRoute.js'
import authMiddleWare from "./Middleware/authMiddleWare.js";


const app = express();



//Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({ origin: '*' }))
dotenv.config();

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Listening at ${process.env.PORT}`)
    )
  ).catch((error) => console.log(error));

//Routes

app.use('/auth', AuthRoute)
app.use('/enquiry', enquiryRoute)

