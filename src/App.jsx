import './App.css'
import { useState } from 'react';
import Navbar from './components/Navbar'
import DashboardPage from './pages/DashboardPage'
import Footer from './components/Footer'
import NotFoundPage from './pages/NotFoundPage'
import AboutPage from './pages/AboutPage'
import ItemDetailsPage from './pages/ItemDetailsPage'
import { Route, Routes } from "react-router-dom"
import recipeData from "./assets/recipe.json";
import Sidebar from "./components/Sidebar"

function App() {
    const [recipe, setRecipe] = useState(recipeData);

 return (
    <>
        <Navbar />
        <div className="layout">
            <Sidebar />   
        <Routes>
            <Route path="/" element={<DashboardPage recipe={recipe} setRecipe={setRecipe}/>} />   
            <Route path="/about" element={<AboutPage />} /> 
            <Route path="/details/:recipeId" element={<ItemDetailsPage recipe={recipe}/>} /> 
           
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </div>
        <Footer />

    </>
)}

export default App