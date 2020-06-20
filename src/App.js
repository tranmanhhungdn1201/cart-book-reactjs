import React, { Component } from 'react';
import './App.css';
import routes from './Route';
import { BrowserRouter as Router } from "react-router-dom";
import {CarProvider} from './contexts/CartContext';

class App extends Component {
  render() {
    return (
      <CarProvider>
        <Router>
          {routes}
        </Router>
      </CarProvider>
    );
  }
}

export default App;
