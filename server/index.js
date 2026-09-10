import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
dotenv.config();
console.log("URI loaded:", process.env.MONGO_DB_URI);

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log("Mongo db is connected !");
  })
  .catch((err) => {
    console.log(`Caught an error : ${err}`);
  });
const u = process.env.MONGO_DB_URI;
console.log("length:", u?.length);
app.listen(2000, () => {
  console.log(`PORT is running at port 2000`);
});
