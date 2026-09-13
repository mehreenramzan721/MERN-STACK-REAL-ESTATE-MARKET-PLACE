import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
export const signup = async (req, res, next) => {
  // req.body is the information we get from the browser
  // by using destructuring we are actually saving the info that we have in our req.body
  const { username, email, password } = req.body;
  // we will not use await in hash async as hashSync is using await in itself as default
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: `User created successfully! ` });
  } catch (error) {
    // res.status(500).json(error.message);
    next(error);
  }
};
