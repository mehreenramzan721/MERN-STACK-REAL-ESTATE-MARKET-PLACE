import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
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
// we name our folder that we are going to make inside mongo db for user with the name User
// because we are creating only 1 user and when later on we added more users then mongo db will set it to Users by default
const User = mongoose.model("User", userSchema);

export default User;
