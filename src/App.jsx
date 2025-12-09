import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
 return (
    <>
        <Navbar />

        <div className="main-container">
            <Sidebar />
            <Home />
        </div>
        
        <Footer />

    </>
)}

export default App