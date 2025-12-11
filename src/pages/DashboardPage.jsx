import List from "../components/List";

function DashboardPage({ recipe, setRecipe }) {
  return (
      <div className="main-container">
      <h1>Recipes Here:</h1>
      <List recipe={recipe} setRecipe={setRecipe}/> 
    </div>
  )
}

export default DashboardPage
