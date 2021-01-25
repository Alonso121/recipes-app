import React from 'react'

function DietInput({setDietType}) {
    return (
        <div className="form-input">
            <label htmlFor="diet-type-choice">Choose a diet type:</label>
        <input
          list="diet-type"
          id="diet-type-choice"
          name="diet-type-choice"
          autoComplete="off"
          onChange={(e) => setDietType(e.target.value)}
        />

        <datalist id="diet-type">
          <option>balanced</option>
          <option>high-protein</option>
          <option>high-fiber</option>
          <option>low-fat</option>
          <option>low-carb</option>
          <option>low-sodium</option>
        </datalist>
        </div>
    )
}

export default DietInput
