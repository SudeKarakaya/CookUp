import { db } from "../config/firebase.js";

export const RatingModel = {
  async setRating(email, mealId, value) {
    await db
      .collection("users")
      .doc(email)
      .collection("ratings")
      .doc(mealId)
      .set({
        mealId,
        value,
        updatedAt: new Date()
      });
  },

  async getUserRatings(email) {
    const snap = await db
      .collection("users")
      .doc(email)
      .collection("ratings")
      .get();

    return snap.docs.map(d => d.data());
  },

  async getMealRating(email, mealId) {
    const doc = await db
      .collection("users")
      .doc(email)
      .collection("ratings")
      .doc(mealId)
      .get();

    return doc.exists ? doc.data() : null;
  }
};
