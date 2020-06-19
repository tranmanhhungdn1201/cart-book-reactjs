import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ItemBook from './ItemBook';

const ListBook = (props) => {
    const books = props.children;
  return (
    <Container>
      <Row>
          {
            books.map(book =>
                <Col key={book._id}>
                    <ItemBook>
                        {book}
                    </ItemBook>
                </Col>
            )
          }
      </Row>
    </Container>
  );
}

export default ListBook;