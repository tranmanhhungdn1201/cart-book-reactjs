import React, { Component } from 'react';
import { Container} from 'reactstrap';
import book from '../../../actions/book';
import httpClient from '../../../actions/httpClient';
import NavBar from '../../layouts/Navbar/NavBar';
import ListBook from '../../common/ListBook';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
        books : []
    };
  }

  componentDidMount(){
    book.getAllBook().then(data => {
      if(data){
        this.setState({
          books: data
        })
      }else{
        alert('errors');
      }
    })
  }

  render(){
    const {books} = this.state;
    return (
    <>
      <NavBar/>
      <Container>
        <h1  className="text-center">List of books</h1>
       <ListBook>
         {books}
       </ListBook>
      </Container>
    </>
    );
  }
}

export default Home;