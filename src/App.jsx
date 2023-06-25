import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
    return (
        <div className="App">
            <Navbar />
            <Sidebar />
            <Home />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default App