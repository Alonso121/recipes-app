import { useState } from "react";
import CaloriesInput from "./FormComp/CaloriesInput";
import DietInput from "./FormComp/DietInput";
import MainInput from "./FormComp/MainInput";
import SubmitButton from "./FormComp/SubmitButton";

function Form({ setFoodInfo }) {
  const [search, setSearch] = useState("");
  const [maxCalories, setMaxCalories] = useState(300);
  const [dietType, setDietType] = useState("balanced");

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
    </div>
  );
}

export default Form;
