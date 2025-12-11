import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import NotFoundPage from './pages/NotFoundPage'
import AboutPage from './pages/AboutPage'
import { Route, Routes } from "react-router-dom"

function App() {
 return (
    <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />   
            <Route path="/about" element={<AboutPage />} />   
           
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />

    </>
)}

export default App