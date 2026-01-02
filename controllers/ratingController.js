import { RatingModel } from "../models/rating.js";

export const setRating = async (req, res) => {
  const { mealId, value } = req.body;

  if (!mealId || value == null) {
    return res.status(400).json({ message: "mealId and value required" });
  }

  if (value < 1 || value > 5) {
    return res.status(400).json({ message: "Rating must be 1-5" });
  }

  await RatingModel.setRating(req.user.email, mealId, value);

  res.json({ message: "Rating saved" });
};

export const getMyRatings = async (req, res) => {
  const ratings = await RatingModel.getUserRatings(req.user.email);
  res.json(ratings);
};

export const getMyMealRating = async (req, res) => {
  const rating = await RatingModel.getMealRating(
    req.user.email,
    req.params.mealId
  );

  res.json(rating || {});
};
