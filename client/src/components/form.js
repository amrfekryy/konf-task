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
  
  // see if item is passed
  const item = 
    props.location && 
    props.location.state &&
    props.location.state.item
    ? props.location.state.item : null
  
  // determine form action
  const action = item ? 'Update' : 'Add'
  
  // get item data
  const { 
    id, 
    type: TYPE='Main Course', 
    name: NAME='', 
    price: PRICE='', 
    photo: PHOTO='' 
  } = item || {}

  // set initial values
  const [type, setType] = useState(TYPE)
  const [name, setName] = useState(NAME)
  const [price, setPrice] = useState(PRICE)
  const [photo, setPhoto] = useState(PHOTO)

  // get mutators
  const addItem = useMutator('addItem')
  const updateItem = useMutator('updateItem')
  const uploadFile = useMutator('uploadFile', setPhoto)

  const handleSubmit = () => {
    // alert(JSON.stringify({type, name, price: +price, photo: photo || 'no photo'}))
    if (action === 'Update') 
      updateItem({variables: {id, type, name, price: +price, photo}})
    else addItem({variables: {type, name, price: +price, photo}})
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
            <input type='file' className="d-none" 
              onChange={async e => {
                const file = e.target.files[0]
                if (!file) alert('No file was selected')
                else uploadFile({variables: { file }})
              }}/>
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
