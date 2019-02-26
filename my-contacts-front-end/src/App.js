import React, {Component} from 'react';
import { Route, Switch, Link} from 'react-router-dom'
import DisplayContacts from './containers/DisplayContacts/DisplayContacts'
import AddContactForm from './components/AddContactForm/AddContactForm'
import ModifyContact from './containers/ModifyContact/ModifyContact'
class App extends Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>My Contacts App</h1>
        <Link to="/contacts">
          <button>Contacts List</button>
        </Link>
        <Link to="/add_contact">
          <button>Add a contact</button>
        </Link>
        <Switch>
          <Route path="/contacts" component={DisplayContacts}/>
          <Route path="/add_contact" component={AddContactForm}/>
          <Route path="/modify_contact" component={ModifyContact}/>

        </Switch>
      </div>
    );
  }
}

export default App;
