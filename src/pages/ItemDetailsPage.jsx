import { useParams } from "react-router-dom";
import getLabels from "../Utilities/getLabels.js"

function ItemDetailsPage({ recipe }) {
  const { recipeId } = useParams();

  const theOneRecipe = recipe.find((oneRecipe) => {
    if (oneRecipe.id == recipeId) {
      return true;
    }
  });

  return (
      <div className="main-container">

      <div className="recipe-image">
        <img src={theOneRecipe.image} />
      </div>
      
      <div className="theOneRecipe-content">
        <p>Name: {theOneRecipe.name}</p>
        <p>Calories: {theOneRecipe.calories}</p>
        <p>Serving: {theOneRecipe.servings}</p>
        <div className="labels">
          {getLabels(theOneRecipe.calories).map((label) => (
            <span key={label}>{label} </span>
          ))}
        </div>
        </div>


    </div>
  )
}

export default ItemDetailsPage