import React from 'react';
import styles from '../assets/stylesheets/property.css'

var Property = (props) => {
  return (
    <div className={styles.property}>
      <img src={props.details.image} height="150" width="250" />
      <div> * {props.details.rating} ({props.details.review_count})</div>
      <div>{props.details.type} . {props.details.beds} beds</div>
      <div>{props.details.name}</div>
      <div>${props.details.price} / night</div>
    </div>
  )
}

export default Property;