import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';
import styles from './Styles/SearchFilm.js';

export default class SearchFilm extends Component {
    render() {
        return (
            <SearchBar
                darkTheme
                round
                placeholder='Type here...'
            />
        )
    }
}