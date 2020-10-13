import React, { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default function Page(props) {
  return (
    <Fragment>
      <Navbar style={{ 
        boxShadow: '0 8px 6px -6px grey',
        backgroundColor: '#fff'
      }}>
        <Navbar.Brand><b>CAFE REACT</b></Navbar.Brand>
      </Navbar>
      <Container>
        <Row>
          {props.children}
        </Row>
      </Container>
    </Fragment>
  );
}
