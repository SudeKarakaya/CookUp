import { db } from "../config/firebase.js";

export const PlannerModel = {
  async getPlans(email) {
    const snap = await db
      .collection("users")
      .doc(email)
      .collection("planner")
      .get();

    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  },

  async addPlan(email, plan) {
    await db
      .collection("users")
      .doc(email)
      .collection("planner")
      .add({
        ...plan,
        createdAt: new Date()
      });
  },

  async deletePlan(email, id) {
    await db
      .collection("users")
      .doc(email)
      .collection("planner")
      .doc(id)
      .delete();
  }
};
