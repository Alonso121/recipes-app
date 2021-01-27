import React from 'react'

function CaloriesInput({maxCalories, setMaxCalories}) {
    return (
        <div className="form-input">
            <label htmlFor="max-calories">Max. calories</label>
        <input
          id="max-calories"
          value={maxCalories}
          type="number"
          min="100"
          step="100"
          onChange={({ target }) => setMaxCalories(target.value)}
        ></input>
        </div>
    )
}

export default CaloriesInput
