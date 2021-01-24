import { useEffect, useState } from "react";
import { KEYS } from "./keys";
import Recipe from "./Recipe";

function Recipes() {
  const [food, setFood] = useState("chicken");
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.edamam.com/search?q=${food}&app_id=${KEYS.APP_ID}&app_key=${KEYS.APP_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        setRecipes(result.hits);
        console.log(result);
      });
  }, [food]);

  function handleSubmit(e) {
    e.preventDefault();
    setFood(search);
    console.log(search);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        ></input>
        <button className="search-button" type="submit">
          search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default Recipes;
