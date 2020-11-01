import React from 'react';
import Navbar from './components/navBar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
   <>
   <Router>
    <h1>Johnnys Greatest Hockey Moments</h1>
    <Navbar />
    <Switch>
      <Route path='/' exact />
    </Switch>
    </Router>
   </>
  );
}

export default App;
