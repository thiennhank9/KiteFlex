import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import styles from './Styles/ScrollHome.js';
import SliderFilm from '../Components/SliderFilm.js';
import { FooterSupport, ListCategory } from '../Containers/index.js';
import TopKeyWords from './TopKeyWords.js';

export default class ScrollHome extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <SliderFilm navigation={this.props.navigation}/>
                <ListCategory navigation={this.props.navigation}/>
                <TopKeyWords />
                <FooterSupport />
            </ScrollView>
        )
    }
}