import React, { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar'

export default function Page(props) {
  return (
    <Fragment>
      <Navbar style={{ 
        boxShadow: '0 8px 6px -6px grey',
        backgroundColor: '#fff'
      }}>
        <Navbar.Brand href='/'><b>CAFE REACT</b></Navbar.Brand>
      </Navbar>
      {props.children}
    </Fragment>
  );
}
