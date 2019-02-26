import React, { Component } from 'react'
import { connect } from 'react-redux'
import ContactCard from '../ContactCard/ContactCard'
import {fetchAllContacts} from '../../actions/main'

class DisplayContacts extends Component {

  componentDidMount(){
    this.props.fetchAllContacts();
  }
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
            id={item._id}
          />
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({contacts}) => ({
  contacts
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllContacts: () => dispatch(fetchAllContacts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayContacts)