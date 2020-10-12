import React from 'react';
import Card from 'react-bootstrap/Card'
import Blank from 'assets/blank.png'
import Col from 'react-bootstrap/Col'

export default function ItemCard(props) {

  return (
    <Col xs={12} md={6} lg={4} style={{padding: '1rem'}}>
      <Card>
        <Card.Img variant="top" src={Blank} />
        <Card.Body>
          <div style={{
            display: 'flex',
            flexDirection: 'row',          
            justifyContent: 'space-between',
          }}>
            <Card.Subtitle className="mb-2 text-muted">Type</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">Price</Card.Subtitle>
          </div>
          <Card.Title>Name</Card.Title>
          <div style={{
            display: 'flex',
            flexDirection: 'row',          
            justifyContent: 'center',
          }}>
            <Card.Link href="#" style={{color: 'green'}}>Update</Card.Link>
            <Card.Link href="#" style={{color: 'red'}}>Delete</Card.Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
