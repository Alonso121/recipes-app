import React from 'react'

function DietInput({setDietType}) {
    return (
        <div className="form-control">
            <label htmlFor="diet-type">Choose a diet type:</label>
       
        <select id="diet-type" onChange={(e) => setDietType(e.target.value)}>
          <option value="balanced">balanced</option>
          <option value="high-protein">high-protein</option>
          <option value="high-fiber">high-fiber</option>
          <option value="low-fat">low-fat</option>
          <option value="low-carb">low-carb</option>
          <option value="low-sodium">low-sodium</option>
        </select>
        </div>
    )
}

export default DietInput
