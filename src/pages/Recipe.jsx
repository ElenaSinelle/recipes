import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMealById } from "../api";
import Preloader from "../components/Preloader";
import RecipeItem from "../components/RecipeItem";
import GoBackBtn from "../components/GoBackBtn";

export default function Recipe() {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();

  useEffect(() => {
    // console.log("Category component rendered");
    if (id) {
      // console.log("Fetching data for category:", id);

      getMealById(id)
        .then((data) => {
          if (data && data.meals) {
            // console.log("Fetched recipe data:", data.meals[0]);
            setRecipe(data.meals[0]);
          } else {
            // console.log("No recipe data found");
            setRecipe({}); // В случае, если данные отсутствуют
          }
        })
        .catch((error) => {
          console.error("Error fetching recipe data:", error);
          setRecipe({}); // В случае ошибки
        });
    } else {
      console.log("No recipe id provided in URL params");
    }
  }, [id]);

  return !recipe.idMeal || Object.keys(recipe).length === 0 ? (
    <Preloader />
  ) : (
    <>
      <RecipeItem recipe={recipe} {...recipe} />
      <GoBackBtn />
    </>
  );
}
