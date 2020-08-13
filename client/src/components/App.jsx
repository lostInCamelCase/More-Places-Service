import React from 'react';
import axios from 'axios';
import styles from '../assets/stylesheets/app.css';
import Carousel from './Carousel.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: []
    }
  }

  componentDidMount() {
    this.getProperties();
  }

  getProperties() {
    let getOptions = {
      method: 'GET',
      url: '/properties',
    };
    axios(getOptions)
      .then((response) => {
        console.log('response', response.data);
        this.setState({ properties: response.data.slice(0, 12) });
      })
      .catch((error) => {
        console.log('error: ', error);
      });
    }

  render() {
    return (
      <div>
        <div className={styles.container}>
          <h1>More places to stay</h1>
          <div className={styles.buttonboard}>Hello</div>
        </div>
        <div>
          <Carousel properties={this.state.properties} />
        </div>
      </div>
    );
  }
}

export default App;