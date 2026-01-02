import { db } from "../config/firebase.js";
import bcrypt from "bcrypt";

const usersRef = db.collection("users");

export const UserModel = {
  async createUser(email, password) {
    const hash = await bcrypt.hash(password, 10);

    await usersRef.doc(email).set({
      email,
      password: hash,
      createdAt: new Date()
    });
  },

  async getUser(email) {
    const doc = await usersRef.doc(email).get();
    return doc.exists ? doc.data() : null;
  }
};
