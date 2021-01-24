import React from "react";
import style from "./recipes.module.css";

function Recipe({ key, title, calories, image, ingredients }) {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <img className={style.image} src={image} key={key} alt=""></img>
      <p>
        <b>Calories: </b>
        {Math.floor(calories)}
      </p>

      <ol>
        {ingredients.map((ingredient) => (
          <li>
            <img
              className={style.ingredient}
              key={Math.random() * 10000000000}
              src={ingredient.image}
              alt=""
            ></img>
            <p>{ingredient.text}</p>
            <p>
              <i>{Math.floor(ingredient.weight)} g</i>
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Recipe;
