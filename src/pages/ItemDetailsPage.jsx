import { useParams, Link } from "react-router-dom";
import getLabels from "../Utilities/getLabels.js"

function ItemDetailsPage({ recipe }) {
  const { recipeId } = useParams();

  const theOneRecipe = recipe.find((oneRecipe) => {
    if (oneRecipe.id == recipeId) {
      return true;
    }
  });

  return (
      <div className="item-detail">

      <div className="recipe-image">
        <img src={theOneRecipe.image} alt={theOneRecipe.name}/>
      </div>
      
      <div className="theOneRecipe-content">
        <p>Name: {theOneRecipe.name}</p>
        <p>Calories: {theOneRecipe.calories}</p>
        <p>Serving: {theOneRecipe.servings}</p>
        <div className="labels">
          {getLabels(theOneRecipe.calories).map((label) => (
            <p 
              key={label}
              className={label === "Low Calories" ? "low" : "high"}
            >
              {label} 
            </p>
          ))}
        </div>
        </div>
        <Link to="/">
          <button className="btn-back">Back</button>
        </Link>

    </div>
  )
}

export default ItemDetailsPage