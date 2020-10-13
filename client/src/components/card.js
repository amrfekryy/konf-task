import React from 'react';
import Card from 'react-bootstrap/Card'
import Blank from 'assets/blank.png'

export default function ItemCard(props) {

  const { type, name, price, photo } = props.item

  return (
    <Card>
      <Card.Img variant="top" src={photo || Blank} />
      <Card.Body>
        <div style={{
          display: 'flex',
          flexDirection: 'row',          
          justifyContent: 'space-between',
        }}>
          <Card.Subtitle className="mb-2 text-muted">{type}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{price}</Card.Subtitle>
        </div>
        <Card.Title>{name}</Card.Title>
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
  );
}
