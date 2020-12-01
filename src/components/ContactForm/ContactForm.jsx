import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  static defaultProps = {
    onAddContact: () => {},
  };

  static propTypes = {
    onAddContact: PropTypes.func,
  };

  state = {
    name: "",
    number: "",
  };

  handleChange = ({ target }) => {
    const {name,value} = target
    this.setState({
      [name]: value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault()
    const {name,number} = this.state
    this.props.onAddContact(name, number)
    this.setState({name:'',number:''})
  }
  

  render() {
    return (
      <form onSubmit={this.submitHandler} className={`${styles.phoneBookForm} basic`}>
        <label htmlFor="formName" className={styles.formLabel}> 
          Name
          <input
            className={styles.formInput}
            required
            id="formName"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="formNumber" className={styles.formLabel}>
          Number
          <input
            className={styles.formInput}
            id="formNumber"
            type="number"
            name="number"
            value={this.state.number}
            required
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
