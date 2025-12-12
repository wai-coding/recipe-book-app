import { Link } from "react-router-dom"

function ListItem({ recipe, handleDeleteRecipe, getLabels }) {

  return (
      <div className="recipe-card">
        <Link to={`/details/${recipe.id}`} key={recipe.id}>
        <div className="recipe-image">
          <img src={recipe.image} />
        </div>

        <div className="recipe-content">
          <p className="capitalized">Name: {recipe.name}</p>
          <div className="labels">
            {getLabels(recipe.calories).map((label) => (
              <p 
                key={label}
                 className={label === "Low Calories" ? "low" : "high"}
              >
                  {label} 
              </p>
            ))}
          </div>
        </div>
        </Link>
        <Link to={`/edit/${recipe.id}`}>
          <button 
            className="btn-edit"
          >
            Edit
          </button>
        </Link>

        <button 
          className="btn-delete"
          onClick={() => handleDeleteRecipe(recipe.id)}
        >
          Delete
        </button>
         
      </div>
     
    
  );
}

export default ListItem;
