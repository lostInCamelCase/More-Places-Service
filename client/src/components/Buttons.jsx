import React from 'react';
import styles from '../assets/stylesheets/buttons.css';

var Buttons = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>More places to stay</div>
      <div className={styles.buttonboard}>
        <div>{props.page} / 3</div>
        <button className={styles.toggleButton} onClick={props.previous}>
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
        </button>
        <button className={styles.toggleButton} onClick={props.next}>
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  )
}

export default Buttons;