import axios from 'axios';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    galleryItem: {
      id: '',
      path: '',
      description: '',
      likes: '',
    },
    galleryList: [],
    errorMsg: null,
  };

  componentDidMount() {
    //getdata
  
    this.getGalleryData();
  }
  
  getGalleryData() {
    axios({
      method: 'GET',
      url: '/gallery',
    })
    .then((response) => {
      console.log('getGalleryData', this.state.galleryList);
      this.setState({
        galleryList: response.data
      });
    })
    .catch((error) => {
      console.log(error);
      this.setState({
        errorMsg: 'ERror in GET',
      });
    });

    updateGalleryData() {
      axios({
        method: 'PUT',
        url: '/like/:id',
        data: 'empty',
      })
    }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
  }
}

export default App;
