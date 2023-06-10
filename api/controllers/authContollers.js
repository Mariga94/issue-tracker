import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { NONAME } from "dns";

export const register = async (req, res) => {
  try {
    const password = req.body.password;
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    const newUser = new User({
      ...req.body,
      password: hashPassword,
    });
    await newUser.save();
    res.status(201).send("User successfully created.");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!user || (user && !isPasswordValid)) {
      res.status(401).send("Invalid credentials");
    } else {
      const token = jwt.sign(
        {
          email: user.email,
          userId: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
        },
        process.env.JWT_KEY
      );
      const { password, email, _id, ...info } = user._doc;
      res
        .cookie("token", token, {
          httpOnly: true,
          sameSite: "None",
          secure: true,
        })
        .status(200)
        .send({ email, _id });
    }
  } catch (err) {
    res.status(500).send("Something is wrong");
  }
};

export const logout = async (req, res) => {
  res
    .clearCookie("token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("User has been logged out");
};
