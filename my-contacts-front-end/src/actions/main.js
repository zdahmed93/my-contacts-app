import axios from 'axios'

export const FETCH_ALL_CONTACTS = "FETCH_ALL_CONTACTS";
export const REMOVE_CONTACT = "REMOVE_CONTACT";
export const SELECT_CONTACT = "SELECT_CONTACT";

export const fetchAllContacts = () => {
  const request = axios.get("http://localhost:4000/contacts");
  return {
    type: FETCH_ALL_CONTACTS,
    payload: request
  }
}

export const removeContact = (id) =>{
  const request = axios.delete(`http://localhost:4000/delete_contact/${id}`);
  return {
    type: REMOVE_CONTACT,
    payload: request,
    id: id
  }
}

export const selectContact = (currentContact) => {
  return {
    type: SELECT_CONTACT,
    payload: currentContact
  }
}

