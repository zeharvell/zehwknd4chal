import React, { Component } from 'react';

class GalleryList extends Component {
  //render and return inside of return necescarry
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
        <div>{pcList}</div>
      </div>
    );
  }
}

export default GalleryList;
