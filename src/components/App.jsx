import React from "react";
import { nanoid } from 'nanoid';
import { Form } from "./Form/Form";
export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    
  };
  
  addContact = data => {
    const{name, number}=data
    console.log(name, number)
    this.setState(prevState => {
      return {
        contact: prevState.contacts.push({id:nanoid(),name:name, number:number})
      };
    }
      
    )
  }
 
  
  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <Form addContact={this.addContact } />
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </div>
    );
  }
};
