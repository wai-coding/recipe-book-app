function ListItem({ recipe, handleDeleteRecipe, getLabels }) {
  return (
    <div className="recipe-card">
      <div className="recipe-image">
        <img src={recipe.image} />
      </div>

      <div className="recipe-content">
        <p>Name: {recipe.name}</p>
        <p>Calories: {recipe.calories}</p>
        <p>Serving: {recipe.servings}</p>
        <div className="labels">
          {getLabels(recipe.calories).map((label) => (
            <span key={label}>{label} </span>
          ))}
        </div>

        <button 
          className="btn-delete"
          onClick={() => handleDeleteRecipe(recipe.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ListItem;
