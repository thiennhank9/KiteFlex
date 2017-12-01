import React, { Component } from 'react';
import ImageSlider from 'react-native-image-slider';

import consts from '../Constants/Constants.js';

export default class SliderFilm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: 1,
            interval: null
        }
    }

    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({ position: this.state.position === 2 ? 0 : this.state.position + 1 });
            }, consts.time_transfer)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }


    render() {
        return (
            <ImageSlider
                images={[
                    'https://www.planwallpaper.com/static/images/9-credit-1.jpg',
                    'https://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg',
                    'https://www.planwallpaper.com/static/images/Child-Girl-with-Sunflowers-Images.jpg'
                ]}
                position={this.state.position}
                onPositionChanged={position => this.setState({ position })}
            />
        )
    }
}