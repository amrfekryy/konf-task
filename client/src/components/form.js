import React, {useState} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import useMutator from 'components/mutator'

const Field = props => (
  <Form.Group as={Row}>
    <Form.Label column sm="2" lg="1">{props.label}</Form.Label>
    <Col md="6" lg="4">
      {props.children}
    </Col>
  </Form.Group>
)

export default function FormControl(props) {
  
  const item = 
    props.location && 
    props.location.state &&
    props.location.state.item
    ? props.location.state.item : null
  
  const action = item ? 'Update' : 'Add'

  const { id, 
    type: TYPE='Main Course', 
    name: NAME='', 
    price: PRICE='', 
    photo } = item || {}

  // alert(JSON.stringify(item))
  const [type, setType] = useState(TYPE)
  const [name, setName] = useState(NAME)
  const [price, setPrice] = useState(PRICE)

  const addItem = useMutator('addItem')
  const updateItem = useMutator('updateItem')

  const handleSubmit = () => {
    // alert(JSON.stringify({type, name, price}))
    if (action === 'Update') updateItem({variables: {id, type, name, price: +price}})
    else addItem({variables: {type, name, price: +price}})
  }

  return (
    <Container>
      <div style={{
        display: 'flex',
        flexDirection: 'row',          
        justifyContent: 'space-between',
        margin: '3rem 0 2rem 0'
      }}>
        <h4>{`${action} Menu Item`}</h4>
      </div>

      <Form>
        <Field label='Type'>
          <Form.Control as="select" value={type} 
            onChange={e => setType(e.target.value)}>
            <option>Main Course</option>
            <option>Side</option>
          </Form.Control>
        </Field>

        <Field label='Name'>
          <Form.Control required type="text" value={name}
            onChange={e => setName(e.target.value)}/>
        </Field>

        <Field label='Price'>
          <Form.Control required type="number" value={price}
            onChange={e => setPrice(e.target.value)}/>
        </Field>

        <Field label='Photo'>
          <label className="btn btn-primary">
            <Form.File className="d-none"/>
            Choose Photo
          </label>
        </Field>

        <Button variant="primary" type="submit" 
          onClick={e => {e.preventDefault(); handleSubmit();}}
        >{`${action} Item`}</Button>
      </Form>
    </Container>
  );
}
