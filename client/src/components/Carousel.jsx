import React from 'react';
import styles from '../assets/stylesheets/carousel.css'
import Property from './Property.jsx'

var Carousel = (props) => {
  return (
    <div className={styles.container}>
      {props.properties.map((currentProperty) => {
        return <Property image={currentProperty.image} rating={currentProperty.rating} review_count={currentProperty.review_count} type={currentProperty.type} beds={currentProperty.beds} name={currentProperty.name} price={currentProperty.price}/>
      })}
    </div>
  )
}

export default Carousel;