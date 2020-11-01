import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {
  state = {
    galleryItem: true,
  };

  clickToggle = () => {
    //toggle is true/false counteracts each other having it needed to toggle desc to show image
    console.log('toggling');
    this.setState({
      galleryImage: this.state.galleryImage === false,
    });
  };
  toggleImage = () => {
    if (this.state.galleryImage === true) {
      return (
        <img
          onClick={this.clickToggle}
          alt="Gallery Items"
          className="photo"
          src={this.props.item.path}
        />
      );
    } else {
      return <p onClick={this.clickToggle}>{this.props.item.description}</p>;
    }
  };
  //toggle will render everytime page is started up
  render() {
    console.log('state');
    return (
      <div className="container">
        <div className="image">{this.toggleImage()}</div>
        <button
          onClick={() => this.props.updateGalleryData(this.props.item.id)}
        >
          Like
        </button>
        <p>{this.props.item.likes} people love this!</p>
      </div>
    );
  }
}

export default GalleryItem;
