import React from "react";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup, } from 'react-transition-group';

import ContactsListItem from "./ContactListItem/ContactListItem";

import styles from './ContactList.module.css'

const ContactList = ({ contacts, onDeleteContact }) => {
 
  return <TransitionGroup component='ul' className={`${styles.contactList} `}>
        {contacts.map(({ id, name, number }) => (
              <CSSTransition  key={id}
              timeout={250}
              classNames={styles}>
                <ContactsListItem
                  name={name}
                  number={number}
                  onDeleteContact={() => onDeleteContact(id)}
                />
              </CSSTransition>
    )
  )}
        </TransitionGroup>;
};
ContactList.defaultProps = {
  contacts: [],
  onDeleteContact: () => {},
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default ContactList;
