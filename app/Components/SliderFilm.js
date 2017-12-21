import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import ImageSlider from '../Libs/ImageSlider';
import styles from './Styles/SliderFilm.js';
import consts from '../Constants/Constants.js';

const url_request = 'https://api.themoviedb.org/3/discover/movie?api_key=0f866d616e28d66616b042c3c43a39d4&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1';
const url_base_image = 'https://image.tmdb.org/t/p/w500';

export default class SliderFilm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: 1,
            interval: null,
            list_images: []
        };

    }

    getListImagesFilmPopularity() {
        return fetch(url_request)
            .then(response => response.json())
            .then(responseJson => {
                let results = responseJson.results;
                let list_images = [];
                

                //get the list images from json
                results.forEach(element => {
                   
                    let objElement = {
                        //get field from json, can add/edit fields that is needeed here, example json can see in https://developers.themoviedb.org/3/discover/movie-discover
                        uri: url_base_image + element.backdrop_path,
                        title: element.title
                    }

                     //push the image's object
                    list_images.push(objElement);
                });

                //set state list image
                this.setState({
                    list_images: list_images
                })

                console.log(this.state.list_images);
                console.log(this.state.list_images.length)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    componentWillMount() {
            this.setState({
                interval: setInterval(() => {
                    this.setState({ position: this.state.position === this.state.list_images.length - 1 ? 0 : this.state.position + 1 });
                }, consts.time_transfer)
            });
    }

    componentWillUnmount() {
            clearInterval(this.state.interval);
    }

    componentDidMount() {
        //make sure to run just once
        if (this.state.list_images.length == 0)
            this.getListImagesFilmPopularity();
    }

    renderIndicateWhileFetching() {
        return (
            <View style={{ flex: 1, paddingTop: 20 }}>
                <ActivityIndicator />
            </View>
        )
    }
    render() {
        if (this.state.list_images.length == 0)
            return this.renderIndicateWhileFetching();
        else
            return (
                <View style={styles.container}>
                    <ImageSlider
                        images={this.state.list_images}
                        position={this.state.position}
                        onPositionChanged={position => this.setState({ position })}
                    />
                </View>
            )
    }
}