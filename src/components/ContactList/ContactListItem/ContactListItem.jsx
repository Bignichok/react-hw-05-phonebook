import React from "react";
import PropTypes from "prop-types";

const ContactsListItem = ({ name, number, onDeleteContact }) => {
  return (
    <li className={`basic`}> 
      <div>
      <p>
        <span>Name:</span> {name} 
      </p>
      <p>
        <span>Number:</span> {number}
      </p>

      </div>
    
      <button type="button" onClick={onDeleteContact}>
       
      </button>
    </li>
  );
};

ContactsListItem.defaultProps = {
  name: "anonymous",
  number: "888888888",
  onDeleteContact: () => {},
};

ContactsListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
export default ContactsListItem;
