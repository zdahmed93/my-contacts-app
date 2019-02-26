import React, {Component} from 'react'
import {connect} from 'react-redux';
import axios from 'axios';

class ModifyContact extends Component{
  constructor(props) {
    super(props);
    this.state = {
      nameInput: this.props.selectedContact.name,
      phoneInput: this.props.selectedContact.phoneNumber,
      emailInput: this.props.selectedContact.email

    }
  }

  handleNameInputChange = (event) => {
    this.setState({nameInput: event.target.value})
  }

  handlePhoneInputChange = (event) => {
    this.setState({phoneInput: event.target.value})

  }

  handleEmailInputChange = (event) => {
    this.setState({emailInput: event.target.value})
  }

  handleModifications = (event) => {
    event.preventDefault();
    const id = this.props.selectedContact.id;
    const {nameInput, phoneInput, emailInput} = this.state;
    const newContactCredentials = {
      name: nameInput,
      phoneNumber: phoneInput,
      email: emailInput
    }
    axios.put(`http://localhost:4000/modify_contact/${id}`, newContactCredentials )
      .then(res => console.log(res))
      .then(res => this.props.history.push("/contacts"))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h2>Add Contact Page</h2>

        <form>
          <hr/>
          <div>
            <label>Contact Name</label><br/>
            <input
              type="text"
              value={this.state.nameInput}
              onChange={this.handleNameInputChange}
            />
          </div>

          <div>
            <label>Contact Phone Number</label><br/>
            <input
              type="text"
              value={this.state.phoneInput}
              onChange={this.handlePhoneInputChange}
            />
          </div>

          <div>
            <label>Contact E-mail</label><br/>
            <input
              type="text"
              value={this.state.emailInput}
              onChange={this.handleEmailInputChange}
            />
          </div>
            <button onClick={(event) => this.handleModifications(event)}>Modify Contact</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({selectedContact}) => ({
  selectedContact
})

export default connect(mapStateToProps)(ModifyContact);