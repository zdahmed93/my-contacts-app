import React from 'react';
import {Link} from 'react-router-dom'


const ContactCard = (props) => {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <h4>{props.phoneNumber}</h4>
      <h4>{props.email}</h4>
      <Link to="/modify_contact">
        <button>Modify</button>
      </Link>
      <button>Delete</button>
    </div>
  )
}

export default ContactCard;