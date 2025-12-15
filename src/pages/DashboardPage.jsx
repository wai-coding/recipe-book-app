import List from "../components/List";
import CreateRecipe from "../components/CreateRecipe";

function DashboardPage({ recipe, setRecipe }) {
  return (
    <div className="recipe-container">
      <CreateRecipe recipe={recipe} setRecipe={setRecipe} />
      <h1>Recipes</h1>
      <div className="list-horizontal">
        <List recipe={recipe} setRecipe={setRecipe} />
      </div>
    </div>
  );
}

export default DashboardPage;
