import React from 'react';
import styles from '../assets/stylesheets/property.css'

var Property = (props) => {
  return (
    <div className={styles.property}>
      <div class="image">
        <img src={props.image} height="150" width="250" />
        <h2>Superhost</h2>
      </div>
      <div> * {props.rating} ({props.review_count})</div>
      <div>{props.type} . {props.beds} beds</div>
      <div>{props.name}</div>
      <div>${props.price} / night</div>
    </div>
  )
}

export default Property;