import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {removeContact, selectContact} from '../../actions/main'


class ContactCard extends Component {


  handleModifyContact = () => {
    const {history} = this.props;
    const {name, phoneNumber, email, id} = this.props;
    this.props.selectContact({name, phoneNumber, email, id}, () => history.push("/modify_contact"))
    //this.props.history.push("/modify_contact")
  }

  render() {
    const {name, phoneNumber, email, id} = this.props;
    return (
      <div className="card">
        <h2>{name}</h2>
        <h4>{phoneNumber}</h4>
        <h4>{email}</h4>
        <Link to="/modify_contact">
          <button onClick={this.handleModifyContact}>Modify</button>
        </Link>
        <button onClick={() => this.props.removeContact(id)}>Delete</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeContact: (id) => dispatch(removeContact(id)),
  selectContact: (currentContact) => dispatch(selectContact(currentContact))
})

export default connect(null, mapDispatchToProps)(ContactCard);