import express from "express";
import { auth } from "../middleware/authMiddleware.js";
import { getPlanner, addPlan, deletePlan , generateShoppingList } from "../controllers/plannerController.js";

const router = express.Router();

// Gel all planned meals for the user
router.get("/", auth, getPlanner);

// Add a new meal to the weekly planner
router.post("/", auth, addPlan);

// Remove a meal from the planner
router.delete("/:id", auth, deletePlan);

// Generate a shopping list based on all meals in the planner
router.get("/shopping-list", auth, generateShoppingList);

export default router;
