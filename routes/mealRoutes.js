import express from "express";
import {
  searchMeals,
  getMealDetails,
  searchIngredient,
  getByCuisine,
  filterDietary
} from "../controllers/mealController.js";

const router = express.Router();

// Search meals by name
router.get("/search", searchMeals);

// Get a meal's details
router.get("/meal/:id", getMealDetails);

// Search by ingredient
router.get("/ingredient", searchIngredient);

// Search by cuisine
router.get("/cuisine", getByCuisine);

// Filter based on dietary (Vegeterian etc.)
router.get("/diet", filterDietary);

export default router;
