import React from 'react';
import styles from '../assets/stylesheets/buttons.css';

var Buttons = (props) => {
  return (
    <div className={styles.container}>
      <h1>More places to stay</h1>
      <div className={styles.buttonboard}>
        <div>{props.page} / 3</div>
        <button onClick={props.previous}></button>
        <button onClick={props.next}></button>
      </div>
    </div>
  )
}

export default Buttons;