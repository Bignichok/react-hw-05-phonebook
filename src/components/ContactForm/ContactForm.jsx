import React, { Component } from "react";
import styles from "./ContactForm.module.css";
import PropTypes from "prop-types";

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

  inputChangeHandler = (e,type) => {
    this.setState({
      [type]:e.target.value
    })
  }

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
            onChange={(e)=>this.inputChangeHandler(e,'name')}
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
            onChange={(e)=>this.inputChangeHandler(e,'number')}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
