import React, { Component } from 'react';
import { FlatList } from 'react-native';
import styles from './Styles/ListFilmByCategory.js';
import lsFilmByCategory from '../Objects/ListFilmByCategory.js';
import { ItemFilm } from '../Components/index.js';
import { OptimizedFlatList } from 'react-native-optimized-flatlist';
import api from '../APIs/TMDb_Config.js';
import FetchingIndicator from '../Components/FetchingIndicator.js';

export default class ListFilmByCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            lsFilmByCategory: []
        }
    }

    componentDidMount() {
        this.getListFilmByCategory()
    }

    getSuggestion() {
        return fetch(api.url_request_suggestions)
            .then(response => response.json())
            .then(responseJson => {
                let results = responseJson.results;
                let list_images = [];

                //get the list images from json
                results.forEach((element, index) => {

                    let objElement = {
                        //get field from json, can add/edit fields that is needeed here, example json can see in https://developers.themoviedb.org/3/discover/movie-discover
                        key: index,
                        uri: api.url_get_image(element.poster_path),
                        title: element.title,
                    }

                    //push the image's object
                    list_images.push(objElement);
                });

                this.setState({
                    lsFilmByCategory: list_images,
                    isLoading: false
                })
            })
            .catch((error) => {
                console.error(error)
            })
    }

    getListFilmByCategory() {
        switch (this.props.category) {
            case 'Suggestions':
                this.getSuggestion();
                break;
            default:
        }
    }

    renderItemFilm(item) {
        return (
            <ItemFilm
                navigation={this.props.navigation}
                item={item}
                uri={item.uri}
                name={item.title}
            />
        )
    }

    _keyExtractor = (item, index) => index;

    render() {
        if (this.state.isLoading)
            return <FetchingIndicator />
        else
            return (
                <FlatList
                    keyExtractor={this._keyExtractor}
                    horizontal
                    data={this.state.lsFilmByCategory}
                    renderItem={this.renderItemFilm.bind(this)}
                />
            )
    }
}