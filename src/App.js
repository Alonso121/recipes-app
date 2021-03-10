import Form from "./Form";
import Recipe from "./Recipe";
import { useEffect, useState } from "react";

function App() {
  const [foodInfo, setFoodInfo] = useState({
    foodType: "chicken",
    inquireCal: 500,
    diet: "balanced",
  });
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_EDAMAM_URL}?q=${foodInfo.foodType}&app_id=${process.env.REACT_APP_EDAMAM_ID}&app_key=${process.env.REACT_APP_EDAMAM_KEY}&calories=${foodInfo.inquireCal}&diet=${foodInfo.diet}&to=20`
    )
      .then((res) => res.json())
      .then((result) => {
        setRecipes(result.hits);
      });
  }, [foodInfo]);

  return (
    <div className="App">
      <h1 className="title">Welcome to the recipe finder!</h1>
      <Form setFoodInfo={setFoodInfo} />
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

export default App;
