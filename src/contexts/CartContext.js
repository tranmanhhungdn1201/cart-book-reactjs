import React, {Component} from 'react';
export const CarContext = React.createContext();

export class CarProvider extends Component {
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
        const {cart} = this.state;
        const newCart = cart.length > 0 ? [...cart, book] : [book];
        this.setState({
          cart: newCart
        });
        localStorage.setItem('cart', JSON.stringify(newCart));
      }

    render() {
        const {cart} = this.state;
        return (
        <CarContext.Provider value={{cart:cart, addCart:this.addCart}}>
            {this.props.children}
        </CarContext.Provider>
        )
    }
}