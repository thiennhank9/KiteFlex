import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './Styles/ButtonSupport.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ButtonSupport extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <View style={styles.container}>
                    <Icon
                        name={this.props.icon_name}
                        size={25}
                    />
                    <Text>
                        {this.props.text_name}
                    </Text>
                </View>
                
        )
    }
}