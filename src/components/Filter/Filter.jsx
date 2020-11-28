import React from "react";
import PropTypes from "prop-types";

import styles from "./Filter.module.css";

const Filter = ({ filter, onChangeFilter }) => (
    <div className={`${styles.wrp} basic`}>
      <label className={styles.filterLabel}>
        Find Contacts by name
         </label> 
        <input 
          className={styles.filterInput}
          type="text"
          value={filter}
          onChange={(e) => onChangeFilter(e.target.value)}
          /> 
    </div>
  );


Filter.defaultProps = {
  onChangeFilter: () => {},
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func,
  filter: PropTypes.string,
};

export default Filter;
