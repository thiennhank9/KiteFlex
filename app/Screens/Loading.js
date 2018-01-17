import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { PulseIndicator } from 'react-native-indicators';
import StatusBarApp from '../Components/StatusBarApp.js';
import styles from './Styles/Loading.js';
import actionCreators from '../Redux/ActionsCreator.js';
import {resetAction} from '../Navigators/NavigationActions.js';
import api from '../APIs/TMDb_Config.js';
import firebaseApp from '../Firebase/Config';
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
                this.getListWatched(user);
                this.getListFavorites(user);
                this.getListWatchLater(user);
                this.getListDownloads(user);
            }
            else {

            }
        }.bind(this))
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
                        uri_poster: api.url_get_poster(element.poster_path),
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
            })
    }
    //function get data should be put here
    componentDidMount() {
        this.automaticallySignIn();
        this.getListImagesFilmPopularity();
        //this.getListWatched();
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

    //function that get data list watched, favorite and watch later from firebase
    //for tab library
    getListWatched(user) {
        const uid = user.uid;
        const path_to_uid = `list_watched/${uid}`;
        try {
            const root_path = firebaseApp.database().ref();
            root_path.once('value')
            .then(function(snapshot){
                if (snapshot.child(path_to_uid.toString()).exists()) {
                    let list_watched = snapshot.child(path_to_uid.toString()).val();
                    store.dispatch(actionCreators.send_list_recents(list_watched));
                }
                else {
                }
            }.bind(this))

        }
        catch (error) {
            
        }
    }

    getListFavorites(user) {
        const uid = user.uid;
        const path_to_uid = `list_favorites/${uid}`;
        try {
            const root_path = firebaseApp.database().ref();
            root_path.once('value')
            .then(function(snapshot){
                if (snapshot.child(path_to_uid.toString()).exists()) {
                    let list_watched = snapshot.child(path_to_uid.toString()).val();
                    store.dispatch(actionCreators.send_list_favorites(list_watched))
                }
                else {
                }
            }.bind(this))

        }
        catch (error) {
            
        }
    }

    getListWatchLater(user) {
        const uid = user.uid;
        const path_to_uid = `list_watch_later/${uid}`;
        try {
            const root_path = firebaseApp.database().ref();
            root_path.once('value')
            .then(function(snapshot){
                if (snapshot.child(path_to_uid.toString()).exists()) {
                    let list_watched = snapshot.child(path_to_uid.toString()).val();
                    store.dispatch(actionCreators.send_list_watch_later(list_watched))
                }
                else {
                }
            }.bind(this))

        }
        catch (error) {
            
        }
    }

    getListDownloads(user) {
        const uid = user.uid;
        const path_to_uid = `list_downloads/${uid}`;
        try {
            const root_path = firebaseApp.database().ref();
            root_path.once('value')
            .then(function(snapshot){
                if (snapshot.child(path_to_uid.toString()).exists()) {
                    let list_watched = snapshot.child(path_to_uid.toString()).val();
                    store.dispatch(actionCreators.send_list_downloads(list_watched))
                }
                else {
                }
            }.bind(this))

        }
        catch (error) {
            
        }
    }
}