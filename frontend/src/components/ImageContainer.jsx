import React from 'react';
import PropTypes from 'prop-types';
import './ImageContainer.css';

const ImageContainer = ({ 
  src, 
  alt, 
  heading, 
  date
}) => {
  return (
    <div className="image-container">
      <img 
        src={src} 
        alt={alt} 
        className="container-image" 
      />
      {heading && <h3 className="image-heading">{heading}</h3>}
      {date && <p className="image-date">{date}</p>}
    </div>
  );
};

ImageContainer.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  heading: PropTypes.string,
  date: PropTypes.string
};

export default ImageContainer;
