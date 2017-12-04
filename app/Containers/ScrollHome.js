import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import styles from './Styles/ScrollHome.js';
import { SliderFilm } from '../Components/index.js';
import { FooterSupport, ListCategory } from '../Containers/index.js';


export default class ScrollHome extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <SliderFilm />
                <ListCategory navigation={this.props.navigation}/>
                <FooterSupport />
            </ScrollView>
        )
    }
}