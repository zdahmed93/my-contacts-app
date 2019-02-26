
import {combineReducers} from 'redux'

import { FETCH_ALL_CONTACTS, REMOVE_CONTACT, SELECT_CONTACT } from '../actions/main'


const contactsReducer = (state = [], action) => {
  switch (action.type) {

    case FETCH_ALL_CONTACTS:
      return action.payload.data;

    case REMOVE_CONTACT:
      return [...state].filter(item => (item._id !== action.id))

    default:
      return state;
  }
}

const initialSelection = {
  name:'',
  phoneNumber: '',
  email: '',
  id: ''
}

const selectedContactReducer = (state = initialSelection, action) => {
  switch (action.type) {
    case SELECT_CONTACT:
      return action.payload;
    default:
      return state
  }
}


export default combineReducers({
  contacts: contactsReducer,
  selectedContact: selectedContactReducer
})
