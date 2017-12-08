import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Styles/ButtonSupport.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ButtonSupport extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity style={styles.container}>
                {/* <View style={styles.iconContainer}> */}
                    <Icon
                        name={this.props.icon_name}
                        size={20}
                        color='grey'
                    />
                {/* </View> */}
                <Text style={styles.textWhite}>
                    {this.props.text_name}
                </Text>
            </TouchableOpacity>

        )
    }
}