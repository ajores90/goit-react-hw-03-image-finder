import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const ImageGallery = ({ children }) => {
  return <ul className={clsx('ImageGallery')}>{children}</ul>;
};

ImageGallery.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ImageGallery;
