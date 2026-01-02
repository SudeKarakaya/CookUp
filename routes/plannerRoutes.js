import express from "express";
import { auth } from "../middleware/authMiddleware.js";
import { getPlanner, addPlan, deletePlan , generateShoppingList } from "../controllers/plannerController.js";

const router = express.Router();

router.get("/", auth, getPlanner);
router.post("/", auth, addPlan);
router.delete("/:id", auth, deletePlan);
router.get("/shopping-list", auth, generateShoppingList);

export default router;
