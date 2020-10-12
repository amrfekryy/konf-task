import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

export default function Menu(props) {
  return (
    <Container>
      <div style={{
        display: 'flex',
        flexDirection: 'row',          
        justifyContent: 'space-between',
        margin: '3rem 0 2rem 0'
      }}>
        <h4>Add Menu Item</h4>
      </div>

      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm="2" lg="1">Type</Form.Label>
          <Col md="6" lg="4">
            <Form.Control as="select">
              <option>Main Course</option>
              <option>Side</option>
            </Form.Control>
          </Col>
        </Form.Group>


        <Form.Group as={Row}>
          <Form.Label column sm="2" lg="1">Name</Form.Label>
          <Col md="6" lg="4">
            <Form.Control type="text" />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm="2" lg="1">Price</Form.Label>
          <Col md="6" lg="4">
            <Form.Control type="text" />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm="2" lg="1">Photo</Form.Label>
          <Col md="6" lg="4">
            <label className="btn btn-primary">
              <Form.File className="d-none"/>
              Choose Photo
            </label>
          </Col>
        </Form.Group>


        <Button variant="primary" type="submit">
          Save Item
        </Button>

      </Form>
    </Container>
  );
}
