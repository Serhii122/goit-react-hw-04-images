import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MdOutlineImageSearch } from 'react-icons/md';
import { toast } from 'react-toastify';
import css from './Searchbar.module.css';

class Searchbar extends Component {
    state = {
        searchName: '',
    };
    handleNameChange = e => {
        this.setState({ searchName: e.currentTarget.value.toLowerCase() });
    };
    onSubmit = e => {
        e.preventDefault();

        if (this.state.searchName.trim() === '') {
            toast.error('Please select an image', {
                theme: " "
            });
            return;
        }
        this.props.onSubmit(this.state.searchName);
    };

    render() {
        return (
            <header className={css.searchbar}>
                <form className={css.searchForm} onSubmit={this.onSubmit}>
                    <button type="submit" className={css.searchForm__button}>
                        <MdOutlineImageSearch />
                    </button>
                    <input
                        className={css.searchForm__input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.searchName}
                        onChange={this.handleNameChange}
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