import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';
import styles from './Styles/SearchFilm.js';

export default class SearchFilm extends Component {
    render() {
        return (
            <SearchBar
                lightTheme
                round
                placeholder='Type here...'
            />
        )
    }
}