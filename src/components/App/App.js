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
        console.log('getGalleryData', response.data);
        this.setState({
          galleryList: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          errorMsg: 'ERror in GET',
        });
      });
  }
  updateGalleryData = (imageId) => {
    console.log('updateGalleryData');
    axios({
      method: 'PUT',
      url: `gallery/like/${imageId}`,
    })
      .then((response) => {
        this.getGalleryData();
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          errorMsg: 'Could not update PUT gallery',
        });
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>Gallery goes here</p>
        <GalleryList
          image={this.state.galleryList}
          updateGalleryData={this.updateGalleryData}
        />
      </div>
    );
  }
}

export default App;
