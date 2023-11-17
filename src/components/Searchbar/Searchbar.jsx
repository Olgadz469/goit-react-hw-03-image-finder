import React, { Component } from 'react';
import css from './Searchbar.module.css';
import { FaSearch } from 'react-icons/fa';

export class SearchBar extends Component {
  state = {
    searchName: '',
    // inputValue: '',
  };

  handleChange = event => {
    // this.setState({ inputValue: event.target.value });
    this.setState({ searchName: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // const searchQuery = event.target.elements.searchName.value.trim();
    const searchQuery = this.state.searchName;
    this.props.onSubmit(searchQuery);
    // event.target.reset();
    this.setState({ searchName: '' });
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
            // value={this.state.inputValue}
            value={this.state.searchName}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
