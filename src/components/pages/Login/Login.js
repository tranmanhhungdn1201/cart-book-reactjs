import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import { Link } from "react-router-dom";
import auth from '../../../actions/auth';
import NavBar from '../../layouts/Navbar/NavBar';

const initialState = {
  email: '',
  password: '',
  errorEmail: '',
  errorPassword: '',
  errorLogin: ''
};
class Login extends Component {
  constructor(props){
    super(props);
    this.state = initialState;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  validateForm(){
    const {email, password} = this.state;
    let errors = {
      errorEmail: '',
      errorPassword: '',
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
    this.setState({
      ...errors
    });
    return isError;
  }

  onLogin(evt){
    evt.preventDefault()
    const checkValidate = this.validateForm();
    if(!checkValidate){
      const data = this.state;
      let currentComponent = this;
      auth.logIn(data).then(user => {
        if(user) {
          currentComponent.props.history.push('/');
        }
      });
    }
  }

  render(){
    const {errorEmail, errorPassword, errorLogin} = this.state;
    return (
    <>
      <NavBar/>
      <Container>
        <h1  className="text-center">Login</h1>
        <Form>
          <FormGroup row>
            <Label for="email" sm={2}>Email</Label>
            <Col sm={10}>
              <Input type="email" name="email" id="email" placeholder="Email" onChange={this.handleInputChange}/>
              <p className="text-danger">{ errorEmail }</p>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="password" sm={2}>Password</Label>
            <Col sm={10}>
              <Input type="password" name="password" id="password" placeholder="Password" onChange={this.handleInputChange}/>
              <p className="text-danger">{ errorPassword }</p>
            </Col>
          </FormGroup>
          <FormGroup className="text-center">
            <Button onClick={this.onLogin}>Đăng nhập</Button>
            <p className="text-danger">{ errorLogin }</p>
          </FormGroup>
          <Row>
            <Col className="text-center">
              <Link to="forget-password">Quên mật khẩu?</Link>
              <Link to="register">Đăng ký</Link>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
    );
  }
}

export default Login;