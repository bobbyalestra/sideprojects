import React from 'react';
import Navbar from './components/navBar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';

function App() {
  return (
   <>
   <Router>
    <h1>Johnnys Greatest Hockey Moments</h1>
    <Navbar />
    <Switch>
      <Route path='/' exact component =
        {HTMLFormElement}
      />
    </Switch>
    </Router>
   </>
  );
}

export default App;
