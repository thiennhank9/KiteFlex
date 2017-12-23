import React, { Component } from 'react';
import { FlatList } from 'react-native';
import styles from './Styles/ListFilmByCategory.js';
import lsFilmByCategory from '../Objects/ListFilmByCategory.js';
import { ItemFilm } from '../Components/index.js';
import { OptimizedFlatList } from 'react-native-optimized-flatlist';
import api from '../APIs/TMDb_Config.js';
import FetchingIndicator from '../Components/FetchingIndicator.js';
import objHash from '../Objects/HashCategoryAndUrl.js';

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

    getListFilmFromUrl(url) {
        return fetch(url)
            .then(response => response.json())
            .then(responseJson => {
                let results = responseJson.results;
                let list_images = [];

                //only get 7 elements from json
                for (let i = 0; i < 7; i++) {
                    let element = results[i];

                    let title_image = '';
                    console.log(element.title)
                    console.log(element.name)
                    if (element.title != undefined)
                        title_image = element.title;
                    else
                        title_image = element.name;

                    let objElement = {
                        //get field from json, can add/edit fields that is needeed here, example json can see in https://developers.themoviedb.org/3/discover/movie-discover
                        key: i,
                        uri: api.url_get_poster(element.poster_path),
                        title: title_image,
                        id_movie: element.id
                    }
                    list_images.push(objElement);
                }

                this.setState({
                    lsFilmByCategory: list_images,
                    isLoading: false
                })
            })
            .catch((error) => {
                //need to handle error
                console.error(error)
            })
    }

    getListFilmByCategory() {

        //find url by each category
        let url = objHash[this.props.category]

        //check if the category is not in the list
        if (url !== undefined)

            //get list film and change state to render
            this.getListFilmFromUrl(url)
    }

    renderItemFilm(item) {
        return (
            <ItemFilm
                navigation={this.props.navigation}
                item={item}
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