import React from 'react';
import styles from '../assets/stylesheets/property.css'

var Property = (props) => {
  return (
    <div className={styles.property}>
      <div className={styles.image}>
        <img src={props.image} />
        <div className={styles.panel}>
          <div className={styles.superhost}>SUPERHOST</div>
          <button className={styles.save} onClick={props.save}></button>
        </div>
      </div>
      <div>
        <span className={styles.star}><i class="fa fa-star" aria-hidden="true"></i> </span>
        {props.rating}({props.review_count})
        </div>
      <div className={styles.details}>{props.type} · {props.beds} beds</div>
      <div className={styles.details}>{props.name}</div>
      <div className={styles.details}>Price: <span className={styles.price}>${props.price}</span> / night</div>
    </div>
  )
}

export default Property;