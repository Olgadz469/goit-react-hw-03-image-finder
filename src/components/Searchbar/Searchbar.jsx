import React, { Component } from 'react';
import css from './Searchbar.module.css';
import { FaSearch } from 'react-icons/fa';

export class SearchBar extends Component {
  state = {
    searchName: '',
    inputValue: '',
  };

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const searchQuery = event.target.elements.searchName.value.trim();
    this.props.onSubmit(searchQuery);
    event.target.reset();
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form onSubmit={this.handleSubmit} className={css.SearchForm}>
          <button type="submit" className={css.button}>
            <FaSearch />
            <span>Search</span>
          </button>

          <input
            className={css.input}
            name="searchName"
            type="text"
            id="search"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
