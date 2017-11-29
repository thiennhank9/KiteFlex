import React, { Component } from 'react';
import {
    SectionList,
    View,
    Text,
    ScrollView,
} from 'react-native';
import styles from './Styles/TestScreen.js';

export default class TestScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    stickySectionHeadersEnabled
                    style={styles.container}
                    horizontal
                    sections={[
                        { title: 'D', data: [1, 2, 3] },
                        { title: 'J', data: [4, 6, 7] }
                    ]}
                    renderItem={({ item }) => <Text> {item}</Text>}

                    renderSectionHeader={({ section }) =>
                        <Text style={styles.header}> {section.title} </Text>

                    }
                />
            </View>
        )
    }
}