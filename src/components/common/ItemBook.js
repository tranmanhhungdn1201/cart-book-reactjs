import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {CarContext} from '../../contexts/CartContext';
import bookType from '../../constants/bookType';

const ItemBook = (props) => {
  const book = props.children;
  return (
    <Card>
      <CardImg top width="100%" src={book.photo} alt={book.title} />
      <CardBody>
        <CardTitle>{book.title}</CardTitle>
        <CardSubtitle>{bookType[book.type]}</CardSubtitle>
        <CardText>{book.description}</CardText>
        <CarContext.Consumer>
          {
            (data) =>  <Button data-book={JSON.stringify(book)} onClick={data.addCart}>Add to Cart</Button>
          }
        </CarContext.Consumer>
      </CardBody>
    </Card>
  );
};

export default ItemBook;