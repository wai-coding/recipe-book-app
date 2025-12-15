import { Link } from "react-router-dom";

function ListItem({ recipe, handleDeleteRecipe, getLabels }) {
  return (
    <div className="recipe-card">
      <Link to={`/details/${recipe.id}`} key={recipe.id}>
        <div className="recipe-image">
          <img src={recipe.image} alt={recipe.name} />
        </div>
      </Link>

      <div className="card-style">
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

          <div className="buttons">
            <Link to={`/edit/${recipe.id}`}>
              <button className="btn-edit">Edit</button>
            </Link>

            <button
              className="btn-delete"
              onClick={() => handleDeleteRecipe(recipe.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
