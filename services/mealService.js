import axios from "axios";

const API = "https://www.themealdb.com/api/json/v1/1";

export const MealService = {

  // Search meals by name (e.g., "chicken", "pasta")
  async searchMeals(query) {
    const res = await axios.get(`${API}/search.php?s=${query}`);
    return res.data.meals;
  },

  // Retrieve full meal details using a meal ID
  async getMealById(id) {
    const res = await axios.get(`${API}/lookup.php?i=${id}`);
    // The API returns an array even for single results
    return res.data.meals?.[0];
  },

   // Search meals that include a specific ingredient
  async searchByIngredient(ingredient) {
    const res = await axios.get(`${API}/filter.php?i=${ingredient}`);
    return res.data.meals;
  },

  // Filter meals by cuisine (Turkish etc.)
  async getByCuisine(cuisine){
    const res = await axios.get(`${API}/filter.php?a=${cuisine}`);
    return res.data.meals;
  },

  // Filter meals by category (e.g., Vegetarian, Seafood)
  async filterByCategory(category){
    const res = await axios.get(`${API}/filter.php?c=${category}`);
    return res.data.meals;
  },

  // Filter meals by dietary tags (e.g., "gluten-free")
  async filterByTag(tag){
    const res = await axios.get(`${API}/search.php?s=`);
    const meals = res.data.meals || [];

    return meals.filter(m =>
    m.strTags && m.strTags.toLowerCase().includes(tag.toLowerCase())
    );
  }

};
