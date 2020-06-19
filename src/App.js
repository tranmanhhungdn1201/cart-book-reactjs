import React, { Component } from 'react';
import './App.css';
import routes from './Route';
import { BrowserRouter as Router } from "react-router-dom";
import CarContext from './contexts/CartContext';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cart: []
    };
    this.addCart = this.addCart.bind(this);
  }
  componentDidMount(){
    const cart = JSON.parse(localStorage.getItem('cart'));
    if(cart){
      this.setState({
        cart: [...cart]
      });
    }
  }

  addCart(e){
    const book = JSON.parse(e.target.dataset.book);
    console.log(book);
    const {cart} = this.state;
    const newCart = cart.length > 0 ? [...cart, book] : [book];
    this.setState({
      cart: newCart
    });
    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  render() {
    const {cart} = this.state;
    console.log(cart);
    return (
      <CarContext.Provider value={{cart:cart, addCart:this.addCart}}>
        <Router>
          {routes}
        </Router>
      </CarContext.Provider>
    );
  }
}

export default App;
