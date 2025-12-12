import List from "../components/List";
import CreateRecipe from "../components/CreateRecipe"

function DashboardPage({ recipe, setRecipe }) {
  return (
      <div className="recipe-container">
      <CreateRecipe recipe={recipe} setRecipe={setRecipe} />
      <h1>Recipes Here:</h1>
      <List recipe={recipe} setRecipe={setRecipe}/> 
    </div>
  )
}

export default DashboardPage
