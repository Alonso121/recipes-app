import React from 'react'

function CaloriesInput({setMaxCalories}) {
    return (
        <div className="form-input">
            <label htmlFor="max-calories">Max. calories</label>
        <input
          id="max-calories"
          placeholder="per serving"
          type="number"
          min="100"
          step="100"
          onChange={({ target }) => setMaxCalories(target.value)}
        ></input>
        </div>
    )
}

export default CaloriesInput
