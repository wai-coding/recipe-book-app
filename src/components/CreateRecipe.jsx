import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function CreateRecipe({ recipe, setRecipe }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(1);

  function handleFormSubmit(event) {
    event.preventDefault();
    const newRecipe = { id: uuidv4(), name, image, calories, servings };
    setRecipe([newRecipe, ...recipe]);

    setName("");
    setImage("");
    setCalories(0);
    setServings(1);
  }

  return (
    <>
      <h1>Add New Recipe</h1>
      <div className="form-add-recipe">
        <form onSubmit={handleFormSubmit}>
          <label>
            <span>Name:</span>
            <input
              type="text"
              className="capitalized"
              placeholder="Recipe name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </label>

          <label>
            <span>Picture:</span>
            <input
              type="url"
              placeholder="https://example-url.com"
              value={image}
              onChange={(event) => {
                setImage(event.target.value);
              }}
            />
          </label>

          <label>
            <span>Calories:</span>
            <input
              type="number"
              value={calories}
              min={0}
              onChange={(event) => {
                setCalories(event.target.value);
              }}
            />
          </label>

          <label>
            <span>Servings:</span>
            <input
              type="number"
              value={servings}
              min={1}
              onChange={(event) => {
                setServings(event.target.value);
              }}
            />
          </label>
          <button className="btn-add">Add</button>
        </form>
      </div>
    </>
  );
}
export default CreateRecipe;
