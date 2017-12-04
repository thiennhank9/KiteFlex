import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles/TitleControl';

class TitleControl extends Component {
    state = {  }

    render() {
        return (
            <View style={styles.filmTitle}>
                <View style={styles.headerTitle}>
                    <TouchableOpacity style={styles.iconBack}
                                        onPress={() => {}}>
                        <Icon
                        name='arrow-left'
                        size={24}
                        style={styles.icon}
                        />
                    </TouchableOpacity>
                    <Text style={styles.textTitle}>{this.props.firmName}</Text>
                </View>
    
                {/* <View style={styles.anotherButton}>
                <View style={{backgroundColor: 'green', width: 20}} />
                <View style={{backgroundColor: 'green', width: 20}} />
                </View> */}
            </View>
        );
    }
}

export default TitleControl;