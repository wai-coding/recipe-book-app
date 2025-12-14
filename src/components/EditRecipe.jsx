import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function EditRecipe({ recipe, setRecipe }) {
  const { recipeId } = useParams();
  const nav = useNavigate();

  const theRecipeToEdit = recipe.find((oneRecipe) => {
    if (oneRecipe.id == recipeId) {
      return true;
    }
  });

  const [name, setName] = useState(theRecipeToEdit.name);
  const [image, setImage] = useState(theRecipeToEdit.image);
  const [calories, setCalories] = useState(theRecipeToEdit.calories);
  const [servings, setServings] = useState(theRecipeToEdit.servings);

  function handleUpdateRecipe(event) {
    event.preventDefault();
    const updatedRecipe = { name, image, calories, servings, id: recipeId };
    const updatedRecipeArray = recipe.map((oneRecipe) => {
      if (oneRecipe.id == recipeId) {
        return updatedRecipe;
      } else {
        return oneRecipe;
      }
    });
    setRecipe(updatedRecipeArray);
    nav("/");
  }

  return (
    <div className="form-add-recipe">
      <h1>{name} Recipe</h1>
      <form onSubmit={handleUpdateRecipe}>
        <label>
          Recipe Name:
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
          Recipe Picture:
          <input
            type="url"
            value={image}
            onChange={(event) => {
              setImage(event.target.value);
            }}
          />
        </label>
        <img className="current-image" src={image} alt={name} />
        <label>
          Calories:
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
          Servings:
          <input
            type="number"
            value={servings}
            min={1}
            onChange={(event) => {
              setServings(event.target.value);
            }}
          />
        </label>
        <button className="btn-update">Update</button>
      </form>
    </div>
  );
}
export default EditRecipe;
