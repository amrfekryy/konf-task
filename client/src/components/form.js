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
  const [type, setType] = useState('Main Course')
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const triggerMutation = useMutator('addItem')

  const handleSubmit = () => {
    alert(JSON.stringify({type, name, price}))
    triggerMutation({variables: {type, name, price: +price}})
  }

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
        <Field label='Type'>
          <Form.Control as="select" onChange={e => setType(e.target.value)}>
            <option>Main Course</option>
            <option>Side</option>
          </Form.Control>
        </Field>

        <Field label='Name'>
          <Form.Control required type="text" onChange={e => setName(e.target.value)}/>
        </Field>

        <Field label='Price'>
          <Form.Control required type="number" onChange={e => setPrice(e.target.value)}/>
        </Field>

        <Field label='Photo'>
          <label className="btn btn-primary">
            <Form.File className="d-none"/>
            Choose Photo
          </label>
        </Field>

        <Button variant="primary" type="submit" 
          onClick={e => {e.preventDefault(); handleSubmit();}}
        >Save Item</Button>
      </Form>
    </Container>
  );
}
