import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/user.js";

export const register = async (req, res) => {
  const { email, password } = req.body;

  const existing = await UserModel.getUser(email);
  if (existing) return res.status(400).json({ message: "User exists" });

  await UserModel.createUser(email, password);
  res.json({ message: "Registered" });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.getUser(email);
  if (!user) return res.status(400).json({ message: "User not found" });

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(400).json({ message: "Wrong password" });

  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "7d"
  });

  res.json({ token, email });
};
