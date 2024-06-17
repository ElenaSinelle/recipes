import { API_URL } from "./config";

const getMealById = async (mealId) => {
  const response = await fetch(API_URL + "lookup.php?i=" + mealId);
  return await response.json();
};

const getAllCategories = async () => {
  const response = await fetch(API_URL + "categories.php");
  return await response.json();
};

const getFilteredCategory = async (catName) => {
  const response = await fetch(API_URL + "filter.php?c=" + catName);
  return await response.json();
};

// с проверками
// const getFilteredCategory = async (catName) => {
//   try {
//     console.log(`Fetching data for category: ${catName}`);
//     const response = await fetch(API_URL + "filter.php?c=" + catName);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log("API response data:", data);
//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return { meals: [] }; // Возвращаем пустой массив в случае ошибки
//   }
// };

export { getMealById, getAllCategories, getFilteredCategory };
