import React, { Component } from 'react'
import { connect } from 'react-redux'
import ContactCard from '../../components/ContactCard/ContactCard'

class DisplayContacts extends Component {

  render(){
    return(
      <div>
        <h1>This is the contacts page</h1>
        {this.props.contacts.map(item => (
          <ContactCard
            key={item._id}
            name={item.name}
            phoneNumber={item.phoneNumber}
            email={item.email}
          />
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({contacts}) => ({
  contacts
})

export default connect(mapStateToProps)(DisplayContacts)