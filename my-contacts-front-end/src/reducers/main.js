
import {combineReducers} from 'redux'

import { ADD_CONTACT } from '../actions/main'
const initialContactsState = [
  {
    "_id" : "5c70c337bd1949ca00387bd4",
    "name" : "Ahmed",
    "phoneNumber" : "123456",
    "email" : "ahmed@gmail.com"
  },
  {
    "_id" : "5c70c2a2bd1949ca00387bd3",
    "name" : "Jacob",
    "phoneNumber" : "112233",
    "email" : "jacob@gmail.com"
  }
]

const contactsReducer = (state = initialContactsState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...initialContactsState, action.payload];

    default:
      return state;
  }
}

export default combineReducers({
  contacts: contactsReducer
})
