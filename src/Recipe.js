import React from "react";
import style from "./recipes.module.css";

function Recipe({ title, calories, image, ingredients, url }) {
  return (
    <div className={style.recipeSheet}>
      <div className={style.recipe}>
        <h1 className={style.title}>{title}</h1>
        <img className={style.image} src={image} alt=""></img>
        <p>
          <b>Calories: </b>
          {Math.floor(calories)}
        </p>

        <ol>
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              <img
                className={style.ingredient}
                src={ingredient.image}
                alt=""
              ></img>
              <p>{ingredient.text}</p>
              <p>
                <b>
                  <i>{Math.floor(ingredient.weight)}g</i>
                </b>
              </p>
            </li>
          ))}
        </ol>
      </div>
      <p className={style.cookingLink}>
        For cooking instructions click{" "}
        <a href={url} target="_blank" rel="noreferrer">
          here
        </a>
        !
      </p>
    </div>
  );
}

export default Recipe;
