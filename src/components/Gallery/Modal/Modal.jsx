import React, { Component } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageUrl } = this.props;

    return (
      <div className={clsx('Overlay')} onClick={this.handleBackdropClick}>
        <div className={clsx('Modal')}>
          <img src={largeImageUrl} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  largeImageUrl: PropTypes.string.isRequired,
};

export default Modal;
