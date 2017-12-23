import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import ImageSlider from '../Libs/ImageSlider';
import styles from './Styles/SliderFilm.js';
import consts from '../Constants/Constants.js';

export default class SliderFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 1,
            interval: null,
            list_images: store.getState().list_top_popularity
        };
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
                        navigation={this.props.navigation}
                        images={this.state.list_images}
                        position={this.state.position}
                        onPositionChanged={position => this.setState({ position })}
                    />
                </View>
            )
    }
}