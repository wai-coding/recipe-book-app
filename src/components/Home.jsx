import recipeData from "../assets/recipe.json";
import List from "../components/List";
import { useState } from 'react'

function Home() {

  const [recipe, setRecipe] = useState(recipeData);


  function getLabels(calories) {
    const labels = [];
    if (calories <= 200) labels.push("Low Calories");
    if (calories > 200) labels.push("High Calories");
    return labels;
  }

  function handleDeleteRecipe(id){
    const filteredRecipe = recipe.filter((recipe) => recipe.id !== id);
    setRecipe(filteredRecipe);
  }

  return (
    <div className="home">
      <h1>Recipes Here:</h1>
      return (
        <List 
          handleDeleteRecipe={handleDeleteRecipe} 
          recipe={recipe}
          getLabels={getLabels}
        /> 
      )
    </div>
  )
}

export default Home