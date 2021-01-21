import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';



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
