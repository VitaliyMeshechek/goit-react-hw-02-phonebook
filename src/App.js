import React from "react";
import React, { Component } from "react";



// import ReactDOM from "react-dom";

export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }


  render() {


      return (
        <div>
          <h1 title="Phonebook"></h1>
          <form>
          <label>
          Name
            <input
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
  />
        </label>

        <button type="submit">Sign up as {login}</button>

          </form>
        </div>
      );
  }
}
