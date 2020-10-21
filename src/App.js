import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import Error from "./components/Error/Error.jsx";
import { CSSTransition } from "react-transition-group";
import fadeStyles from "./css/fade.module.css";
import errorFadeStyles from "./css/errorFadeStyles.module.css";
import "./App.css";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
    showError: false,
  };

  componentDidMount() {
    const localStorageContacts = localStorage.getItem("contacts");
    if (localStorageContacts) {
      this.setState({ contacts: JSON.parse(localStorageContacts) });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }

    if (prevState.showError !== this.state.showError) {
      setTimeout(() => {
        this.setState({ showError: false });
      }, 3000);
    }
  }

  addContact = (name, number) => {
    const { contacts } = this.state;

    if (contacts.some((contact) => contact.name === name)) {
      return this.toggleError();
    } else {
      const contact = {
        id: uuidv4(),
        name,
        number,
      };
      this.setState((prevState) => {
        return {
          contacts: [contact, ...prevState.contacts],
        };
      });
    }
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
      };
    });
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  toggleError = () => {
    this.setState((state) => ({ showError: !state.showError }));
  };

  render() {
    const { filter, contacts, showError } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className="App">
        <CSSTransition
          in={showError}
          timeout={250}
          classNames={errorFadeStyles}
          unmountOnExit
        >
          <Error closeHandler={this.toggleError} />
        </CSSTransition>
        <CSSTransition
          in={true}
          appear={true}
          timeout={400}
          classNames={fadeStyles}
          unmountOnExit
        >
          <h1 className="main-title">PhoneBook</h1>
        </CSSTransition>
        <ContactForm onAddContact={this.addContact} />

        <CSSTransition
          in={contacts.length > 0}
          appear={true}
          timeout={400}
          classNames={fadeStyles}
          unmountOnExit
        >
          <section>
            <h2>Contacts</h2>

            <CSSTransition
              in={contacts.length > 1}
              appear={true}
              timeout={400}
              classNames={fadeStyles}
              unmountOnExit
            >
              <Filter value={filter} onChangeFilter={this.changeFilter} />
            </CSSTransition>

            <CSSTransition
              in={contacts.length > 1 && visibleContacts.length === 0}
              appear={true}
              timeout={400}
              classNames={fadeStyles}
              unmountOnExit
            >
              <p>no results were found for your search</p>
            </CSSTransition>

            <ContactList
              contacts={visibleContacts}
              onDeleteContact={this.deleteContact}
            />
          </section>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
