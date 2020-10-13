import React from 'react';
import Card from 'components/card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import { GET_ITEMS } from 'helpers/queries'
import { useQuery } from '@apollo/client'


export default function Menu(props) {

  const { data, loading, error } = useQuery(GET_ITEMS)
  if (loading) return <div>Loading</div>
  if (error) return <div>Error</div> 
  const items = data && data.getItems.success ? data.getItems.items : []
  // alert(JSON.stringify(data))
  const thereAreItems = items.length > 0

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
        {thereAreItems 
          ? items.map(item => 
            <Col key={item.id} xs={12} md={6} lg={4} style={{padding: '1rem'}}>
              <Card item={item}/>
            </Col>) 
          : <div>No Items Yet</div> 
        }      
      </Row>
    </Container>
  );
}
