import React, { Component } from 'react';
import { Container, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import auth from '../../../actions/auth';
import NavBar from '../../layouts/Navbar/NavBar';

class Register extends Component {
    constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      repassword: '',
      errorEmail: '',
      errorPassword: '',
      errorRepassword: '',
      errorUserName: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  validateForm(){
    const {email, password, repassword} = this.state;
    let errors = {
      errorEmail: '',
      errorPassword: '',
      errorRepassword: '',
      errorUserName: ''
    };
    let isError = false;
    if(!email.includes('@')){
      errors.errorEmail = 'Invalid email.';
      isError = true;
    }
    if(!email.trim()){
      errors.errorEmail = 'Email required.';
      isError = true;
    }
    if(!password.trim()){
      errors.errorPassword = 'Password required.';
      isError = true;
    }
    if(!repassword.trim()){
      errors.errorRepassword = 'Repassword required.';
      isError = true;
    }
    if(repassword !== password){
      errors.errorRepassword = 'Repassword is not equal password.';
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
      auth.signUp(data).then(user => {
        if(user) {
          this.props.history.push('/');
        }
      });
    }
  }

  render(){
    const {errorEmail, errorPassword, errorRepassword, errorRegister, errorUserName} = this.state;
      return (
        <>
          <NavBar/>
          <Container>
            <h1  className="text-center">Register</h1>
            <Form>
              <FormGroup row>
                <Label for="username" sm={2}>Username</Label>
                <Col sm={10}>
                  <Input type="text" name="username" id="username" placeholder="Username" value={this.state.username} onChange={ this.handleInputChange }/>
                  <p className="text-danger">{ errorUserName }</p>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="email" sm={2}>Email</Label>
                <Col sm={10}>
                  <Input type="email" name="email" id="email" placeholder="Email" value={this.state.email} onChange={ this.handleInputChange }/>
                  <p className="text-danger">{ errorEmail }</p>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="password" sm={2}>Mật khẩu</Label>
                <Col sm={10}>
                  <Input type="password" name="password" id="password" placeholder="Mật khẩu" onChange={ this.handleInputChange }/>
                  <p className="text-danger">{ errorPassword }</p>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="repassword" sm={2}>Nhập lại mật khẩu</Label>
                <Col sm={10}>
                  <Input type="password" name="repassword" id="repassword" placeholder="Nhập lại mật khẩu" onChange={ this.handleInputChange }/>
                  <p className="text-danger">{ errorRepassword }</p>
                </Col>
              </FormGroup>
              <FormGroup className="text-center">
                <Button onClick={this.handleSubmit}>Đăng Ký</Button>
                <p className="text-danger">{ errorRegister }</p>
              </FormGroup>
            </Form>
          </Container>
        </>
    );
  }
}

export default Register;