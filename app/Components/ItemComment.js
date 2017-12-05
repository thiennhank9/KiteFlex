import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles/ItemComment.js';

export default class ItemComment extends Component {
    constructor(props) {
        super(props);

    }

    renderStatus() {
        return (
            <View style={styles.statusContainer}>
                <View>
                    <Text style={{color: 'white'}}>
                        {this.props.last_day} ngày trước
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        name='thumb-up-outline'
                        size={15} />
                    <Icon
                        name='comment-outline'
                        size={15} />
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.ava}
                    source={this.props.avatar}
                />
                <View style={styles.txtContainer}>
                    <Text>
                        {this.props.name_user}
                    </Text>
                    <Text>
                        {this.props.comment}
                    </Text>
                    {this.renderStatus()}
                </View>
            </View>
        )
    }
}