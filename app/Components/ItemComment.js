import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles/ItemComment.js';

export default class ItemComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLiked: false
        }
    }

    renderLikeButton() {
        if (this.state.isLiked)
            return (
                <Icon
                    name='thumb-up-outline'
                    size={18}
                    color='dodgerblue'
                    style={{ marginRight: 10 }}
                />
            )

        else
            return (
                <Icon
                    name='thumb-up-outline'
                    size={18}
                    style={{ marginRight: 10 }}
                    color='white'
                />
            )
    }
    renderStatus() {
        return (
            <View style={styles.statusContainer}>
                <View>
                    <Text
                        style={{ color: '#A0522D', fontSize: 11, fontStyle: 'italic' }}
                        numberOfLines={4}
                        ellipsizeMode='tail'
                    >
                        {this.props.last_day} ngày trước
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        onPress={() => this.setState({ isLiked: !this.state.isLiked })}>
                        {this.renderLikeButton()}
                    </TouchableOpacity>
                    <Icon
                        name='comment-outline'
                        size={18}
                        color='dodgerblue'
                    />
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
                    <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>
                        {this.props.name_user}
                    </Text>
                    <Text style={{ color: '#B5B5B5', fontSize: 13, marginTop: 2 }}>
                        {this.props.comment}
                    </Text>
                    {this.renderStatus()}
                </View>
            </View>
        )
    }
}