import { db } from "../config/firebase.js";

export const FavoriteModel = {
  async getFavorites(email) {
    const snap = await db
      .collection("users")
      .doc(email)
      .collection("favorites")
      .get();

    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  },

  async addFavorite(email, meal) {
    await db
      .collection("users")
      .doc(email)
      .collection("favorites")
      .doc(meal.mealId)
      .set({
        ...meal,
        addedAt: new Date()
      });
  },

  async removeFavorite(email, id) {
    await db
      .collection("users")
      .doc(email)
      .collection("favorites")
      .doc(id)
      .delete();
  }
};
