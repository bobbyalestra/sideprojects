
import './App.css';
import Navbar from './components/Navbar.js';
import Home from "./About.js";
import About from "./Home.js";

  function App() {
    return (
      <>
        <Navbar />
        <div className="container mt-2" style={{ marginTop: 40 }}>
          <Home />
          <About />
        </div>
      </>
   
  );

    }
export default App;
