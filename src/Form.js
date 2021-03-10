import { useEffect, useState } from "react";
import CaloriesInput from "./FormComp/CaloriesInput";
import DietInput from "./FormComp/DietInput";
import MainInput from "./FormComp/MainInput";
import SubmitButton from "./FormComp/SubmitButton";
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
      `${process.env.REACT_APP_EDAMAM_URL}?q=${foodInfo.foodType}&app_id=${process.env.REACT_APP_EDAMAM_ID}&app_key=${process.env.REACT_APP_EDAMAM_KEY}&calories=${foodInfo.inquireCal}&diet=${foodInfo.diet}&to=20`
    )
      .then((res) => res.json())
      .then((result) => {
        setRecipes(result.hits);
      });
  }, [foodInfo]);

  function handleSubmit(e) {
    e.preventDefault();
    setFoodInfo({ foodType: search, inquireCal: maxCalories, diet: dietType });
    setSearch("");
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="search-form">
          <MainInput search={search} setSearch={setSearch} />
          <CaloriesInput
            maxCalories={maxCalories}
            setMaxCalories={setMaxCalories}
          />
          <DietInput setDietType={setDietType} />
        </div>
        <hr />
        <SubmitButton />
        <hr />
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
