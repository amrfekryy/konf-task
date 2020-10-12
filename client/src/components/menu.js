import React from 'react';
import Card from 'components/card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

export default function Menu(props) {
  return (
    <Container>
      <div style={{
        display: 'flex',
        flexDirection: 'row',          
        justifyContent: 'space-between',
        margin: '3rem 0 2rem 0'
      }}>
        <h4>Menu</h4>
        <Button variant="primary">Add Menu Item</Button>
      </div>
      <Row>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Row>
    </Container>
  );
}
