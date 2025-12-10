import ListItem from "../components/ListItem"

function List({recipe, handleDeleteRecipe, getLabels}) {
  return(
    <>
      {recipe.map((recipe) => {
        return (
            <ListItem 
                key={recipe.id}
                handleDeleteRecipe={handleDeleteRecipe}
                getLabels={getLabels}
            />
        )
        })}
    </>
  )

}

export default List