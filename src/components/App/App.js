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
  updateGalleryData() {
    axios({
      method: 'PUT',
      url: '/like/:id',
      data: 'empty',
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg" />
        {JSON.stringify(this.state.galleryList)}

        <div>
          {this.state.galleryList.map((item) => (
            <div key={item.id}>
              <img src={item.path} />
              <p>{item.description}</p>
              <p>{item.likes} people love this!</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
