import express from "express";
import {
  searchMeals,
  getMealDetails,
  searchIngredient,
  getByCuisine,
  filterDietary
} from "../controllers/mealController.js";

const router = express.Router();

router.get("/search", searchMeals);
router.get("/meal/:id", getMealDetails);
router.get("/ingredient", searchIngredient);
router.get("/cuisine", getByCuisine);
router.get("/diet", filterDietary);

export default router;
