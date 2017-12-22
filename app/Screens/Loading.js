import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { PulseIndicator } from 'react-native-indicators';
import StatusBarApp from '../Components/StatusBarApp.js';
import styles from './Styles/Loading.js';
import actionCreators from '../Redux/ActionsCreator.js';
import {resetAction} from '../Navigators/NavigationActions.js';
import api from '../APIs/TMDb_Config.js';

// const url_request = 'https://api.themoviedb.org/3/discover/movie?api_key=0f866d616e28d66616b042c3c43a39d4&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1';
// const url_base_image = 'https://image.tmdb.org/t/p/w500';

//config reset action navigation 
export default class Loading extends Component {
    constructor(props) {
        super(props);
    }

    getListImagesFilmPopularity() {
        return fetch(api.url_request_top_popularity)
            .then(response => response.json())
            .then(responseJson => {
                let results = responseJson.results;
                let list_images = [];

                //get the list images from json
                results.forEach((element, index) => {

                    let objElement = {
                        //get field from json, can add/edit fields that is needeed here, example json can see in https://developers.themoviedb.org/3/discover/movie-discover
                        key: index,
                        uri: api.url_get_image(element.backdrop_path),
                        title: element.title,
                    }

                    //push the image's object
                    list_images.push(objElement);
                });

                //set state list image
                store.dispatch(actionCreators.add_list_top_popularity(list_images));

                //navigate to TabApp, but clear Stack to reduce memory ~ meaning clear this LoadingScreen in StackMainApp
                this.props.navigation.dispatch(resetAction)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    componentDidMount() {
        this.getListImagesFilmPopularity();
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBarApp />
                <View style={styles.containerIndicator}>
                    <PulseIndicator
                        size={100}
                        color='chocolate'
                    />
                    <Text style={styles.textLoading}>
                        Loading...
                    </Text>
                </View>
            </View>
        )
    }
}