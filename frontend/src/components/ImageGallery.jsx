import React from 'react';
import PropTypes from 'prop-types';
import './ImageGallery.css';

const ImageGallery = ({ 
  images, 
  borderStyle = 'default', 
  backgroundColor = 'default' 
}) => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          {React.cloneElement(image, { 
            borderStyle, 
            backgroundColor,
            className: 'gallery-image' 
          })}
        </div>
      ))}
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.element).isRequired,
  borderStyle: PropTypes.oneOf(['default', 'rounded', 'sharp', 'dashed']),
  backgroundColor: PropTypes.oneOf(['default', 'light', 'dark', 'accent'])
};

export default ImageGallery;
