import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from 'helpers/queries'
import { useMutation } from '@apollo/client'
import { useNavigate } from "@reach/router"
import { client } from 'index'

export default function useMutator(type) {

  const MUTATION = {
    addItem: ADD_ITEM,
    updateItem: UPDATE_ITEM,
    deleteItem: DELETE_ITEM
  }[type]

  const navigate = useNavigate()

  const [triggerMutation, { data, loading, error }] = useMutation(MUTATION, {
    
    onCompleted(data) {
      if (data[type] && data[type].success) {
        client.resetStore()
        navigate('/')  
      }
      else alert(JSON.stringify(data));
      // alert(JSON.stringify(data, null, 2));
    }
  });
  // if (loading) // do something
  // if (error) return message.error(error.message, 2);
  return triggerMutation
}