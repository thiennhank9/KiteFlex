import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PlayVideo from '../Components/PlayVideo.js';
import DetailFilm from '../Screens/DetailFilm.js';
import FilmDetails from '../Screens/FilmDetails.js';
import { splitIntoTags } from '../Utils/Utils.js';
export default class TestScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    componentWillMount() {
        temp = "adsad, sdfadf, asdsad";
        this.setState({
            text: splitIntoTags(temp)[0]
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* <PlayVideo /> */}
                <Text>
                    {this.state.text}
                </Text>
            </View>
        )
    }
}
