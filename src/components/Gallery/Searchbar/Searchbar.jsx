import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { ImSearch } from 'react-icons/im';

class Searchbar extends Component {
  state = {
    search: '',
  };

  handleInputChange = e => {
    this.setState({ search: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
  };

  render() {
    return (
      <header className={clsx('Searchbar')}>
        <form className={clsx('SearchForm')} onSubmit={this.handleSubmit}>
          <button type="submit" className={clsx('SearchForm-button')}>
            <ImSearch />
          </button>
          <input
            className={clsx('SearchForm-input')}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.search}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
