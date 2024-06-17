import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFilteredCategory } from "../api";
import Preloader from "../components/Preloader";
import MealsList from "../components/MealsList";
import GoBackBtn from "../components/GoBackBtn";

export default function Category() {
  const [meals, setMeals] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  //с проверками
  // useEffect(() => {
  //   console.log("Category component rendered");
  //   if (name) {
  //     console.log("Fetching data for category:", name);
  //     getFilteredCategory(name)
  //       .then((data) => {
  //         if (data && data.meals) {
  //           console.log("Fetched meals data:", data.meals);
  //           setMeals(data.meals);
  //         } else {
  //           console.log("No meals data found");
  //           setMeals([]); // В случае, если данные отсутствуют
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching meals data:", error);
  //         setMeals([]); // В случае ошибки
  //       });
  //   } else {
  //     console.log("No category name provided in URL params");
  //   }
  // }, [name]);

  return !meals.length ? (
    <Preloader />
  ) : (
    <>
      <GoBackBtn />
      <MealsList meals={meals} />
    </>
  );
}
