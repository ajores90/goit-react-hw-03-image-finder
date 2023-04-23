import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className={clsx('ImageGalleryItem')} onClick={onClick}>
      <img src={image} alt="" className={clsx('ImageGalleryItem-image')} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
