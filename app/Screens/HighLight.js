import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import StatusBarApp from '../Components/StatusBarApp.js';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles/HighLight.js';
import toUrls from '../Objects/CategoryUrl.js';
import FetchingIndicator from '../Components/FetchingIndicator.js';
import api from '../APIs/TMDb_Config.js';
import GridFilm from '../Containers/GridFilm.js';
import windows from '../Themes/Windows.js';
import { PacmanIndicator } from 'react-native-indicators';

export default class HighLight extends Component {
    static navigationOptions = {
        tabBarLabel: 'High Light',
        tabBarIcon: ({ tintColor }) => (
            <Icons
                name='diamond'
                size={24}
                style={{ color: tintColor }}
            />
        )
    }

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
        let url_request = api.get_high_light(this.state.page);
        this.getListFilmFromUrl(url_request);
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBarApp color='chocolate' />
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
                <Text style={styles.textCategory}> {params.category}</Text>
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
                    if (element.title != undefined)
                        title_image = element.title;
                    else
                        title_image = element.name;
                    let objElement = {
                        //get field from json, can add/edit fields that is needeed here, example json can see in https://developers.themoviedb.org/3/discover/movie-discover
                        key: i,
                        uri: api.url_get_poster(element.poster_path),
                        title: title_image,
                        id_movie: element.id,
                        media_type: 'movie',
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
                <View style={{
                    // height: windows.height - 185, 
                    flex: 1,
                    backgroundColor: 'black', justifyContent: 'center', alignItems: 'center'
                }}>
                    <View>
                        <PacmanIndicator
                            size={50}
                            color='gold'
                        />
                        {/* <Text style={styles.textCategory}> Loading </Text> */}
                    </View>
                </View>
            )
        else
            return (
                <GridFilm
                    navigation={this.props.navigation}
                    // style={{ height: windows.height - 185 }}
                    data={this.state.data} />
            )
    }

    renderPreviousPageOrNot() {
        if (this.state.page > 1) return (
            <TouchableOpacity
                style={{ height: 30, width: 30, justifyContent: 'center', alignItems: 'center' }}
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
                    size={20}
                    color='chocolate'
                />
            </TouchableOpacity>
        )
        else return (
            <View style={{ height: 30, width: 30, justifyContent: 'center', alignItems: 'center' }}>
            </View>
        )
    }
    renderFooter() {
        return (
            <View style={styles.footer}>
                {this.renderPreviousPageOrNot()}
                <Text style={styles.textCategory}> Page {this.state.page}</Text>
                <TouchableOpacity
                    style={{ height: 30, width: 30, justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => {
                        this.setState({
                            page: this.state.page + 1,
                            isLoading: true
                        })
                        this.fetchData();
                    }}>
                    <Icons
                        name='arrow-right'
                        size={20}
                        color='chocolate'
                    />
                </TouchableOpacity>
            </View>
        )
    }
}