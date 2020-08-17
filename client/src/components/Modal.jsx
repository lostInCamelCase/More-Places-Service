import React from 'react';
import styles from '../assets/stylesheets/modal.css'

var Modal = (props) => {
  if (props.show === false) {
    return null;
  }
  return (
    <div className={styles.modal}>
      <div className={styles.topBar}>
        <button className={styles.closeButton} onClick={props.handleClose}>X</button>
        Save to a list
      </div>
      <div className={styles.listContainer}>
        {props.lists.map((currentList) => {
          return (<button className={styles.listButton} onClick={function() {props.save(currentList.name)}}>{currentList.name}</button>);
        })}
      </div>
    </div>
  );
};

export default Modal;