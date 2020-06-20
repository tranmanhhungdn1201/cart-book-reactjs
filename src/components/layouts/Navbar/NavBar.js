import React, {Component} from 'react';
import httpClient from '../../../actions/httpClient';
import {
    Navbar, Nav, NavItem,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
  } from 'reactstrap';
import { Link } from "react-router-dom";
import {CarContext} from '../../../contexts/CartContext';

class NavBar extends Component{
    constructor(props){
      super(props)
      this.logOut = this.logOut.bind(this);
    }

    logOut() {
      if(httpClient.logOut()){
        this.props.history.push('/login');
      }
    }

    render(){
        const userLogin = httpClient.getCurrentUser();
        const store = httpClient.getStore();
        return (
          <Navbar color="light" light expand="md">
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown setActiveFromChild>
                    <CarContext.Consumer>
                    {
                    (data) =>
                      <DropdownToggle tag="a" className="nav-link" caret>
                        Cart ({ data.cart.length })
                      </DropdownToggle>
                    }
                  </CarContext.Consumer>
                  <DropdownMenu>
                  <CarContext.Consumer>
                  {
                    (data) =>
                    data.cart.map(item =>
                      <DropdownItem keys={item._id}>{ item.title }</DropdownItem>
                      )
                  }
                  </CarContext.Consumer>
                  </DropdownMenu>
                </UncontrolledDropdown>
                {
                  userLogin ?
                  <NavItem>
                    {store ?
                      <>
                        <Link to="books/create" className="mr-2">Create Book</Link>
                        <Link to='books/my-store' className="mr-2">My store</Link>
                      </>
                      : <Link to="stores/create" className="mr-2">Create Store</Link>
                    }
                      <Link to="" className="mr-2">Profile</Link>
                      <a href="#" onClick={this.logOut}>Log out</a>
                  </NavItem>
                  : <Link to="/login" className="mr-2">Login</Link>
                }
              </Nav>
            </Navbar>
        )
    }
}

export default NavBar;