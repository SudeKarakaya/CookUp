import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import favoriteRoutes from "./routes/favoriteRoutes.js";
import plannerRoutes from "./routes/plannerRoutes.js";
import mealRoutes from "./routes/mealRoutes.js";
import ratingRoutes from "./routes/ratingRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/favorites", favoriteRoutes);
app.use("/api/planner", plannerRoutes);
app.use("/api/meals", mealRoutes);
app.use("/api/ratings", ratingRoutes);

app.get("/", (req, res) => res.send("API Running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on " + PORT));
