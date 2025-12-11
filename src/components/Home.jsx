import List from "../components/List";
import Sidebar from "../components/Sidebar";

function Home() {

  return (
    <div className="home">
        <Sidebar />
        <div className="main-container">
        <h1>Recipes Here:</h1>
        <List /> 
      </div>
    </div>
  )
}

export default Home