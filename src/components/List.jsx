import ListItem from "../components/ListItem";
import getLabels from "../Utilities/getLabels.js"

function List({ recipe, setRecipe }) {

  function handleDeleteRecipe(id){
    const filteredRecipe = recipe.filter((recipe) => recipe.id !== id);
    setRecipe(filteredRecipe);
  }
  
  return (
    <>
      {recipe.map((item) => {
        return (
          <ListItem
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
