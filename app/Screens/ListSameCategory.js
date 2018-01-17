import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import StatusBarApp from '../Components/StatusBarApp.js';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles/ListSameCategory.js';
import toUrls from '../Objects/CategoryUrl.js';
import FetchingIndicator from '../Components/FetchingIndicator.js';
import api from '../APIs/TMDb_Config.js';
import GridFilm from '../Containers/GridFilm.js';
import windows from '../Themes/Windows.js';
import { PacmanIndicator } from 'react-native-indicators';

export default class ListSameCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
            page: 1
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const id_genre = this.props.navigation.state.params.id_genre;
        let page = this.state.page;
        let url_request = api.get_same_category(id_genre, page);
        //example is
        //https://api.themoviedb.org/3/discover/movie?api_key=0f866d616e28d66616b042c3c43a39d4&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=28
        this.getListFilmFromUrl(url_request);
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBarApp color='chocolate' />
                {this.renderHeader()}
                {this.renderLine()}
                {this.renderGridFilmOrIndicator()}
                {this.renderFooter()}
            </View>
        )
    }

    renderHeader() {
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.header}>
                <TouchableOpacity
                    style={{ height: 50, width: 50, position: 'absolute', top: 0, left: 0, justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => this.props.navigation.goBack()}>
                    <Icons
                        name='arrow-left'
                        size={30}
                        color='chocolate'
                    />
                </TouchableOpacity>
                <Text style={styles.textCategory}> {params.name_genre}</Text>
            </View>
        )
    }

    renderLine() {
        return (
            <View style={styles.colorline}>
            </View>
        )
    }

    getListFilmFromUrl(url) {
        return fetch(url)
            .then(response => response.json())
            .then(responseJson => {
                let results = responseJson.results;
                let list_images = [];

                for (let i = 0; i < results.length; i++) {
                    let element = results[i];
                    let title_image = '';
                    let media_type = '';
                    if (element.title != undefined) {
                        title_image = element.title;
                        media_type = 'movie';
                    }
                    else {
                        title_image = element.name;
                        media_type = 'tv';
                    }
                    //If this is person, set profile_path to profile_path
                    if (element.profile_path != undefined) {
                        element.poster_path = element.profile_path
                        media_type = 'person'
                    }

                    let objElement = {
                        //get field from json, can add/edit fields that is needeed here, example json can see in https://developers.themoviedb.org/3/discover/movie-discover
                        key: i,
                        media_type: media_type,
                        uri: api.url_get_poster(element.poster_path),
                        title: title_image,
                        id_movie: element.id
                    }
                    list_images.push(objElement);
                }

                this.setState({
                    data: list_images,
                    isLoading: false
                })
            })
            .catch((error) => {
                //need to handle error
                console.error(error)
            })
    }

    renderGridFilmOrIndicator() {
        if (this.state.isLoading)
            return (
                <View style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
                    <PacmanIndicator
                        size={50}
                        color='gold'
                    />
                    {/* <Text style={styles.textCategory}> Loading </Text> */}
                </View>
            )
        else
            return (
                <GridFilm 
                navigation={this.props.navigation}
                style={{ height: windows.height - 100 }} 
                data={this.state.data} />
            )
    }
    
    renderPreviousPageOrNot(){
        if (this.state.page > 1) return (
            <TouchableOpacity
                    style={{ height: 50, width: 50, justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => {
                        if (this.state.page > 1) {
                            this.setState({
                                page: this.state.page - 1,
                                isLoading: true
                            })
                            this.fetchData();
                        }
                    }}>
                    <Icons
                        name='arrow-left'
                        size={30}
                        color='chocolate'
                    />
                </TouchableOpacity>
        )
        else return (
            <View style={{ height: 50, width: 50, justifyContent: 'center', alignItems: 'center' }}>
                </View>
        )
    }
    renderFooter() {
        return (
            <View style={styles.footer}>
                {this.renderPreviousPageOrNot()}
                <Text style={styles.textCategory}> Page {this.state.page}</Text>
                <TouchableOpacity
                    style={{ height: 50, width: 50, justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => {

                        this.setState({
                            page: this.state.page + 1,
                            isLoading: true
                        })
                        this.fetchData();
                    }}>
                    <Icons
                        name='arrow-right'
                        size={30}
                        color='chocolate'
                    />
                </TouchableOpacity>
            </View>
        )
    }
}