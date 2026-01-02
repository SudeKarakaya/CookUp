import axios from "axios";

const API = "https://www.themealdb.com/api/json/v1/1";

export const MealService = {
  async searchMeals(query) {
    const res = await axios.get(`${API}/search.php?s=${query}`);
    return res.data.meals;
  },

  async getMealById(id) {
    const res = await axios.get(`${API}/lookup.php?i=${id}`);
    return res.data.meals?.[0];
  },

  async searchByIngredient(ingredient) {
    const res = await axios.get(`${API}/filter.php?i=${ingredient}`);
    return res.data.meals;
  },

  async getByCuisine(cuisine){
    const res = await axios.get(`${API}/filter.php?a=${cuisine}`);
    return res.data.meals;
  },

  async filterByCategory(category){
    const res = await axios.get(`${API}/filter.php?c=${category}`);
    return res.data.meals;
  },

  async filterByTag(tag){
    const res = await axios.get(`${API}/search.php?s=`);
    const meals = res.data.meals || [];

    return meals.filter(m =>
    m.strTags && m.strTags.toLowerCase().includes(tag.toLowerCase())
    );
  }

};
