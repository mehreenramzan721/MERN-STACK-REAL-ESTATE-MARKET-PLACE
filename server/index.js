import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// importing the routes
import userRoute from "./routes/userRoute.js";
const app = express();
dotenv.config();

// mongoose connection
mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log("Mongo db is connected !");
  })
  .catch((err) => {
    console.log(`Caught an error : ${err}`);
  });

app.use("/api/user", userRoute);

//loading the server
app.listen(2000, () => {
  console.log(`PORT is running at port 2000`);
});
