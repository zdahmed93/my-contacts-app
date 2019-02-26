import React, {Component} from 'react';
import axios from 'axios'

class AddContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: '',
      phoneInput: '',
      emailInput: ''
    }
  }


  handleAddButtonClick = (event) => {
    event.preventDefault();
    const {nameInput, phoneInput, emailInput} = this.state;
    const contactToAdd = {name: nameInput, phoneNumber: phoneInput, email: emailInput}
    axios.post("http://localhost:4000/add_contact", contactToAdd )
      .then(res => console.log(res))
      .then(res => this.props.history.push("/contacts"))
      .catch(err => console.log(err))

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

  render() {
    return (
      <div>
        <h2>Add Contact Page</h2>
        <div style={{marginRight: '20%', marginLeft: '20%'}}>
          <form>
            <div>
              <label>Contact Name</label><br/>
              <input
                type="text"
                value={this.state.nameInput}
                onChange={this.handleNameInputChange}
              />
            </div>
            <hr/>

            <div>
              <label>Contact Phone Number</label><br/>
              <input
                type="text"
                value={this.state.phoneInput}
                onChange={this.handlePhoneInputChange}
              />
            </div>
            <hr/>

            <div>
              <label>Contact E-mail</label><br/>
              <input
                type="text"
                value={this.state.emailInput}
                onChange={this.handleEmailInputChange}
              />
            </div>
            <hr/>

            <div style={{marginTop: 30}}>
                <button type="submit" onClick={(event) => this.handleAddButtonClick(event)}>
              Add Contact
                </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AddContactForm