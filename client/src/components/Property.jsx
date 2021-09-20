import React from 'react';
import styles from '../assets/stylesheets/property.css'

var Property = (props) => {
  return (
    <div className={styles.property}>
      <div className={styles.image}>
        <img src={props.image} />
        <div className={styles.panel}>
          <div className={styles.superhost}>SUPERHOST</div>
          <svg viewBox="0 0 32 32" className={styles.save} onClick={props.save}><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg>
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