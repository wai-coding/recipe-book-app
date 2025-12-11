import ListItem from "../components/ListItem";
import { useState } from 'react';
import recipeData from "../assets/recipe.json";

function List() {
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
    <>
      {recipe.map((item) => {
        return (
          <ListItem
            key={item.id}
            recipe={item}
            handleDeleteRecipe={handleDeleteRecipe}
            getLabels={getLabels}
          />
        );
      })}
    </>
  );
}

export default List;
