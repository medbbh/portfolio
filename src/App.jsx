import { BrowserRouter } from "react-router-dom"
import { About, Experience, Hero, Navbar, Projects } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-x-hidden">
        {/* Hero Section with Navbar */}
        <div className="relative">
          <Navbar />
          <Hero />
        </div>
        
        {/* Main Content Sections */}
        <div className="relative">
          <About />
          <Experience />
          <Projects />
        </div>

        {/* Simple Credit */}
        <div className="bg-primary border-t border-gray-800 py-6">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-gray-400 text-sm">
              Built and designed by <span className="text-accent font-medium">Mohamed</span> © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
