import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { PulseIndicator } from 'react-native-indicators';
import StatusBarApp from '../Components/StatusBarApp.js';
import styles from './Styles/Loading.js';
import actionCreators from '../Redux/ActionsCreator.js';
import {resetAction} from '../Navigators/NavigationActions.js';
import api from '../APIs/TMDb_Config.js';
import firebaseApp from '../Firebase/Config.js';
import {isObjectEmpty} from '../Utils/Utils.js';

//config reset action navigation 
export default class Loading extends Component {
    constructor(props) {
        super(props);
    }

    automaticallySignIn(){
        firebaseApp.auth().onAuthStateChanged(function(user) {
            if (user) {
                let currentUser = {
                    email: user.email,
                    uid: user.uid
                }
                store.dispatch(actionCreators.send_current_user(currentUser));
            }
            else {
                console.log('no user');
                //make sure - just clear current user in redux
                //store.dispatch(actionCreators.clear_current_user())
            }
        })
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
                        vote_average: element.vote_average,
                        overview: element.overview,
                        id_movie: element.id,
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
        this.automaticallySignIn();
        this.getListImagesFilmPopularity();
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBarApp color='chocolate'/>
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