import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  // it records the time of creation and updation of data
  { timestamps: true },
);
// we name our folder that we are going to make inside mongo db for user with the name users
//Mongoose automatically pluralizes and lowercases the model name to decide the collection name. So "User" → collection users in MongoDB, even before you have more than one user.

const User = mongoose.model("User", userSchema);

export default User;
