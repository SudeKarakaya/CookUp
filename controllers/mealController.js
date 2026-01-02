import { MealService } from "../services/mealService.js";

export const searchMeals = async (req, res) => {
  const meals = await MealService.searchMeals(req.query.q);
  res.json(meals || []);
};

export const getMealDetails = async (req, res) => {
  const meal = await MealService.getMealById(req.params.id);
  res.json(meal || {});
};

export const searchIngredient = async (req, res) => {
  const meals = await MealService.searchByIngredient(req.query.i);
  res.json(meals || []);
};

export const getByCuisine = async (req, res) => {
  const meals = await MealService.getByCuisine(req.query.cuisine);
  res.json(meals || []);
};

export const filterDietary = async (req, res) => {
  const { type, value } = req.query;

  try {
    let meals = [];

    if (type === "category") {
      meals = await MealService.filterByCategory(value);
    } else if (type === "tag") {
      meals = await MealService.filterByTag(value);
    }

    res.json(meals || []);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Dietary filter error" });
  }
};