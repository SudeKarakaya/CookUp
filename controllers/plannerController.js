import { PlannerModel } from "../models/planner.js";
import axios from "axios";

// Gel all planned meals for the user
export const getPlanner = async (req, res) => {
  const plans = await PlannerModel.getPlans(req.user.email);
  res.json(plans);
};

// Add a new meal to the weekly planner
export const addPlan = async (req, res) => {
  await PlannerModel.addPlan(req.user.email, req.body);
  res.json({ message: "Added to planner" });
};

// Remove a meal from the planner
export const deletePlan = async (req, res) => {
  await PlannerModel.deletePlan(req.user.email, req.params.id);
  res.json({ message: "Deleted" });
};

// Generate a shopping list based on all meals in the planner
export const generateShoppingList = async (req, res) => {
  try {
    const plans = await PlannerModel.getPlans(req.user.email);

    if (!plans.length) {
      return res.json([]);
    }

    const shoppingList = [];

    for (const plan of plans) {
      const mealId = plan.mealId;

      // Fetch meal details from api
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      );

      const meal = response.data.meals?.[0];
      if (!meal) continue;

      for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];

        if (ingredient && ingredient.trim() !== "") {
          shoppingList.push({
            ingredient,
            measure: measure?.trim() || ""
          });
        }
      }
    }

    res.json(shoppingList);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error generating shopping list" });
  }
};
