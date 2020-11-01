import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
  //rendering images and returning images on dom inside of return necescarry
  render() {
    const imgList = this.props.image.map((item) => {
      return (
        <GalleryItem
          key={item.id}
          item={item}
          updateGalleryData={this.props.updateGalleryData}
        />
      );
    });
    return (
      <div>
        <div>{imgList}</div>
      </div>
    );
  }
}

export default GalleryList;
