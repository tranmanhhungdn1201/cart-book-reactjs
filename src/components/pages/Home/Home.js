import React, { Component } from 'react';
import { Container} from 'reactstrap';
import book from '../../../actions/book';
import NavBar from '../../layouts/Navbar/NavBar';
import ListBook from '../../common/ListBook';
import {FilterContext, FilterProvider} from '../../../contexts/FilterContext';

class Home extends Component {
  render(){
    return (
    <>
      <NavBar/>
      <Container>
        <h1  className="text-center">List of books</h1>
        <FilterProvider>
          <FilterContext.Consumer>
            {
              ({books}) =>
              <ListBook>
                {books}
              </ListBook>
            }
          </FilterContext.Consumer>
        </FilterProvider>
      </Container>
    </>
    );
  }
}

export default Home;