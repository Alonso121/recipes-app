import { useEffect, useState } from "react";
import CaloriesInput from "./FormComp/CaloriesInput";
import DietInput from "./FormComp/DietInput";
import MainInput from "./FormComp/MainInput";
import { KEYS } from "./keys";
import Recipe from "./Recipe";

function Recipes() {
  const [foodInfo, setFoodInfo] = useState({
    foodType: "chicken",
    inquireCal: 500,
    diet: "balanced",
  });
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [maxCalories, setMaxCalories] = useState();
  const [dietType, setDietType] = useState("balanced");

  // https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free
  useEffect(() => {
    fetch(
      `https://api.edamam.com/search?q=${foodInfo.foodType}&app_id=${KEYS.APP_ID}&app_key=${KEYS.APP_KEY}&calories=${foodInfo.inquireCal}&diet=${foodInfo.diet}`
    )
      .then((res) => res.json())
      .then((result) => {
        setRecipes(result.hits);
        console.log(result);
      });
  }, [foodInfo]);

  function handleSubmit(e) {
    e.preventDefault();
    setFoodInfo({ foodType: search, inquireCal: maxCalories, diet: dietType });
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="search-form">
        <MainInput setSearch={setSearch} />
        <CaloriesInput search={search} setMaxCalories={setMaxCalories} />
        <DietInput setDietType={setDietType} />
      </form>

      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={Math.random() * 10000000}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            url={recipe.recipe.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Recipes;
