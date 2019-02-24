import React, {Component} from 'react'
import {Link} from "react-router-dom";

class ModifyContact extends Component{
  constructor(props) {
    super(props);
    this.state = {
      nameInput: this.props.name,
      phoneInput: this.props.phoneNumber,
      emailInput: this.props.email
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

          <Link to="/contacts">
            <button>Modify Contact</button>
          </Link>
        </form>
      </div>
    )
  }
}

export default ModifyContact;