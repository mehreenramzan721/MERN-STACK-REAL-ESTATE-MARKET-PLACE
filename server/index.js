import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// importing the routes
import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";
const app = express();
dotenv.config();

// to allow send json data to be send through browser
app.use(express.json());

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
app.use("/api/auth", authRoute);

//loading the server
app.listen(2000, () => {
  console.log(`PORT is running at port 2000`);
});

// middle ware for handling error
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
