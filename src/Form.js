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
  const [maxCalories, setMaxCalories] = useState(300);
  const [dietType, setDietType] = useState("balanced");

  useEffect(() => {
    fetch(
      `https://api.edamam.com/search?q=${foodInfo.foodType}&app_id=${KEYS.APP_ID}&app_key=${KEYS.APP_KEY}&calories=${foodInfo.inquireCal}&diet=${foodInfo.diet}&to=30`
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
    setSearch("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="search-form">
        <MainInput search={search} setSearch={setSearch} />
        <CaloriesInput
          maxCalories={maxCalories}
          setMaxCalories={setMaxCalories}
        />
        <DietInput setDietType={setDietType} />
      </form>

      <div className="recipes">
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
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
