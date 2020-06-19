import React, { Component } from 'react';
import { Container, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import store from '../../../actions/store';
import NavBar from '../../layouts/Navbar/NavBar';

class Store extends Component {
    constructor(props){
    super(props);
    this.state = {
      name: '',
      description: '',
      errorName: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  validateForm(){
    const {name} = this.state;
    let errors = {
      errorName: ''
    };
    let isError = false;
    if(!name.trim()){
      errors.errorName = 'Name required.';
      isError = true;
    }
    this.setState({
      ...errors
    });
    return isError;
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(){
    const checkValidate = this.validateForm();
    if(!checkValidate){
      const data = this.state;
      store.create(data).then(success => {
        if(success) {
          this.props.history.push('/');
        }
      });
    }
  }

  render(){
    const {name, description, errorName} = this.state;
      return (
        <>
          <NavBar/>
          <Container>
            <h1  className="text-center">Create Shop</h1>
            <Form>
              <FormGroup row>
                <Label for="name" sm={2}>Name</Label>
                <Col sm={10}>
                  <Input type="text" name="name" id="name" placeholder="Name" value={name} onChange={ this.handleInputChange }/>
                  <p className="text-danger">{ errorName }</p>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="description" sm={2}>Description</Label>
                <Col sm={10}>
                  <Input type="text" name="description" id="description" placeholder="Description" value={description} onChange={ this.handleInputChange }/>
                </Col>
              </FormGroup>
              <FormGroup className="text-center">
                <Button onClick={this.handleSubmit}>Đăng Ký</Button>
              </FormGroup>
            </Form>
          </Container>
        </>
    );
  }
}

export default Store;