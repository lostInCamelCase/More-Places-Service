import React from 'react';
import styles from '../assets/stylesheets/carousel.css'
import Property from './Property.jsx'

var Carousel = (props) => {
  return (
    <div className={styles.container}>
      {props.properties.map((currentProperty) => {
        return <Property details={currentProperty}/>
      })}
    </div>
  )
}

export default Carousel;