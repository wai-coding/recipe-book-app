import ListItem from "../components/ListItem";

function List({ recipe, handleDeleteRecipe, getLabels }) {
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
