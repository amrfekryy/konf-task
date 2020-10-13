import React from 'react';
import Card from 'react-bootstrap/Card'
import Blank from 'assets/blank.png'
import useMutator from 'components/mutator'

export default function ItemCard(props) {

  const deleteItem = useMutator('deleteItem')

  const { id, type, name, price, photo } = props.item

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
          <Card.Link href="" style={{color: 'green'}}>Update</Card.Link>
          <Card.Link href="" style={{color: 'red'}}
            onClick={e => {
              e.preventDefault()
              if (window.confirm("Are you sure?")) deleteItem({variables: {id}})
            }} 
          >Delete</Card.Link>
        </div>
      </Card.Body>
    </Card>
  );
}
