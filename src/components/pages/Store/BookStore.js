import React, { Component } from 'react';
import { Container } from 'reactstrap';
import book from '../../../actions/book';
import NavBar from '../../layouts/Navbar/NavBar';
import ListBook from '../../common/ListBook';
import httpClient from '../../../actions/httpClient';

class BookStore extends Component {
  constructor(props){
    super(props);
    this.state = {
        books : []
    };
  }

  componentDidMount(){
    let storeId = this.props.match.params.id;
    if(!storeId){
      storeId = httpClient.getStore()._id;
    }
    book.getBookStore(storeId).then(data => {
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

export default BookStore;