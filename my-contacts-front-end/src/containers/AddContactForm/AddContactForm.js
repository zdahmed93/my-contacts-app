import React, {Component} from 'react';
import { Link } from 'react-router-dom'
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

  plusContact=(e)=>{
    e.preventDefault();
    const { nameInput,phoneInput,emailInput}=this.state;
    //const object = {nameInput,phoneInput,emailInput}
    axios.post('http://localhost:4000/add_contact',{name: nameInput, phoneNumber: phoneInput, email: emailInput})
      .then(res=>console.log(res))
      .catch(err=> console.log(err));

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

          <Link to="/contacts">
            <button onClick={(e)=>{this.plusContact(e)}}>Add Contact</button>
          </Link>
        </form>
      </div>
    )
  }
}

export default AddContactForm