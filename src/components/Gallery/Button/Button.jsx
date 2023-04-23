import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Button = ({ onClick }) => {
  return (
    <button className={clsx('Button')} onClick={onClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Button;
