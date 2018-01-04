import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles/TitleControl';

class TitleControl extends Component {
    state = {  }

    render() {
        const item = this.props.navigation.state.params.item;
        return (
            <View style={styles.filmTitle}>
                <View style={styles.headerTitle}>
                    <TouchableOpacity style={styles.iconBack}
                                        onPress={() => {this.props.navigation.goBack()}}>
                        <Icon
                        name='arrow-left'
                        size={24}
                        style={styles.icon}
                        />
                    </TouchableOpacity>
                    <Text style={styles.textTitle}>{item.title}</Text>
                </View>
            </View>
        );
    }
}

export default TitleControl;