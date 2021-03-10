import { useState } from "react";
import style from "./recipes.module.css";

function Recipe({ title, calories, image, ingredients, url }) {
  const [showIngredients, setShowIngredients] = useState(false);

  return (
    <div className={style.recipeSheet}>
      <div className={style.recipe}>
        <h1 className={style.title}>{title}</h1>
        <img className={style.image} src={image} alt=""></img>
        <p>
          <b>Calories: </b>
          {Math.floor(calories)}
        </p>
        <button
          className={style.showIngredients}
          onClick={() => setShowIngredients(!showIngredients)}
        >
          Show Ingredients
        </button>

        {showIngredients && (
          <>
            <ol>
              {ingredients.map((ingredient, index) => (
                <li key={index}>
                  <img
                    className={style.ingredient}
                    src={ingredient.image}
                    alt=""
                  ></img>
                  <p>
                    {ingredient.text}
                    <span className={style.weight}>
                      {Math.floor(ingredient.weight)}g
                    </span>
                  </p>
                </li>
              ))}
            </ol>

            <p className={style.cookingLink}>
              For cooking instructions click{" "}
              <a href={url} target="_blank" rel="noreferrer">
                here
              </a>
              !
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Recipe;
