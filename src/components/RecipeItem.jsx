export default function RecipeItem({
  recipe,
  idMeal,
  strMeal,
  strCategory,
  strArea,
  strInstructions,
  strMealThumb,
  strYoutube,
}) {
  return (
    <div className="recipe">
      <img src={strMealThumb} alt={recipe.strMeal} />
      <h1 style={{ textAlign: "center" }}>{strMeal}</h1>
      <h6>Category: {strCategory}</h6>
      {strArea ? <h6>Area: {strArea}</h6> : null}
      <p>{strInstructions}</p>

      <table className="centered">
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Measure</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(recipe).map((key) => {
            if (key.includes("Ingredient") && recipe[key]) {
              return (
                <tr key={key}>
                  <td>{recipe[key]}</td>
                  <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>

      {strYoutube ? (
        <div className="row">
          <h5 style={{ margin: "2rem 0 1.5rem", textAlign: "center" }}>
            Video Recipe
          </h5>
          <iframe
            title={idMeal}
            src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
              -11
            )}`}
            allowfullscreen
          />
        </div>
      ) : null}
    </div>
  );
}
