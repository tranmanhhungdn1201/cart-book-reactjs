import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, Input, Button, CustomInput} from 'reactstrap';
import book from '../../../actions/book';

class CreateBook extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      type: '',
      description: '',
      fileImage: {},
      errorTitle: '',
      errorDescription: '',
      errorFileImage: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputFileChange = this.handleInputFileChange.bind(this);
    this.onUpload = this.onUpload.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  validateForm(){
    const {title, description, fileImage, type} = this.state;
    let errors = {
      errorTitle: '',
      errorType: '',
      errorDescription: '',
      errorFileImage: '',
    };
    let isError = false;
    if(!title.trim()){
      errors.errorTitle = 'Title required.';
      isError = true;
    }
    if(!type.trim()){
      errors.errorType = 'Type required.';
      isError = true;
    }
    if(!description.trim()){
      errors.errorDescription = 'Description required.';
      isError = true;
    }
    if(!fileImage.name){
      errors.errorFileImage = 'File required.';
      isError = true;
    }
    this.setState({
      ...errors
    });
    return isError;
  }

  handleInputChange(event){
    const target = event.target;
    const name = target.name;
    const value = target.value;
    console.log(value);
    this.setState({
      [name]: value
    });
  }

  handleInputFileChange(event){
    const target = event.target;
    const name = target.name;
    const value = target.files[0];
    this.setState({
      fileImage: value
    });
  }

  onUpload() {
    const checkValidate = this.validateForm();
    if(!checkValidate){
      const data = new FormData();
      data.append('description', this.state.description);
      data.append('photo', this.state.fileImage);
      data.append('title', this.state.title);
      data.append('type', this.state.type);
      book.create(data).then(success => {
        if(success) {
          this.props.history.push('/');
        }
      });
    }
  }

  render(){
    const {errorTitle, errorDescription, errorFileImage, errorType } = this.state;
    return (
      <Container>
        <h1 className="text-center">Create Book</h1>
        <Form>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input type="text" id="title" name="title" onChange={this.handleInputChange}/>
            <p className="text-danger">{ errorTitle }</p>
          </FormGroup>
          <FormGroup>
            <Label for="type" sm={2}>Type</Label>
              <Input type="select" name="type" id="type" placeholder="Type" onChange={ this.handleInputChange }>
                <option value="1">Magazine</option>
                <option value="2">Dictionary</option>
                <option value="3">Novel</option>
                <option value="4">Comic</option>
              </Input>
              <p className="text-danger">{ errorType }</p>
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input type="text" id="description" name="description" onChange={this.handleInputChange}/>
            <p className="text-danger">{ errorDescription }</p>
          </FormGroup>
          <FormGroup>
            <Label for="fileImage">File Image</Label>
            <CustomInput type="file" id="fileImage" name="fileImage" onChange={this.handleInputFileChange}/>
            <p className="text-danger">{ errorFileImage }</p>
          </FormGroup>
          <Button onClick={this.onUpload}>
            Create
          </Button>
        </Form>
      </Container>
    );
  }
}

export default CreateBook;