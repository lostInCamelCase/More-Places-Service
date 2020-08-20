import React from 'react';
import axios from 'axios';
import styles from '../assets/stylesheets/app.css'
import Buttons from './Buttons.jsx'
import Carousel from './Carousel.jsx';
import Modal from './Modal.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      currentProperties: [],
      lists: [],
      page: 1,
      modal: false
    }
  }

  componentDidMount() {
    this.getProperties();
    this.getLists();
  }

  getProperties() {
    let getOptions = {
      method: 'GET',
      url: '/properties',
    };
    axios(getOptions)
      .then((response) => {
        this.setState({ properties: response.data });
        this.setState({ currentProperties: this.state.properties.slice(0,4) });
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  }

  getLists() {
    let getOptions = {
      method: 'GET',
      url: '/lists',
    };
    axios(getOptions)
      .then((response) => {
        this.setState({ lists: response.data });
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  }

  nextButton() {
    if (this.state.page < 3) {
      this.setState({ page: this.state.page + 1 }, this.updateProperties);
    } else {
      this.setState({ page: 1 }, this.updateProperties);
    }
  }

  previousButton() {
    if (this.state.page > 1) {
      this.setState({ page: this.state.page - 1 }, this.updateProperties);

    } else {
      this.setState({ page: 3 }, this.updateProperties);
    }
  }

  updateProperties() {
    this.setState({ currentProperties: this.state.properties.slice((this.state.page * 4) - 4, (this.state.page * 4)) });
  }

  showModal() {
    this.setState({ modal: true });
  }

  hideModal() {
    this.setState({ modal: false });
  }

  save(listName) {
    console.log(listName);
    window.alert(`Saved to ${listName}!`);
  }

  render() {
    return (
      <div className={styles.frame}>
        <Buttons page={this.state.page} previous={this.previousButton.bind(this)} next={this.nextButton.bind(this)}/>
        <Carousel properties={this.state.currentProperties} save={this.showModal.bind(this)}/>
        <Modal show={this.state.modal} handleClose={this.hideModal.bind(this)} lists={this.state.lists} save={this.save.bind(this)}/>
      </div>
    );
  }
}

export default App;