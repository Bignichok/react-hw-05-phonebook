import React from 'react';
import styles from './Error.module.css'

const Error=({closeHandler})=> (
        <div className={styles.error}>
                <button onClick={closeHandler}></button>
                <p>Contact is already existed</p>
        </div>
        );
export default Error;