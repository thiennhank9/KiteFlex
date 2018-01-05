import React, { PureComponent } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles/ItemComment.js';
import res from '../Resources/index.js';
export default class ItemComment extends PureComponent {
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
                    color='rgba(202,44,44,0.8)'
                />
            )
    }
    renderStatus() {
        return (
            <View style={styles.statusContainer}>
                <View>
                    <Text
                        style={{ color: '#3B3B3B', marginTop: 3, fontSize: 11, fontStyle: 'italic' }}
                        numberOfLines={4}
                        ellipsizeMode='tail'
                    >
                        {this.props.last_day} 2 days ago
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
                        color='#CA2C2C'
                    />
                </View>
            </View>
        )
    }
    render() {
        const item = this.props.item;
        //console.log(item)
        const comment = item.comment;
        const uid = item.uid;
        const email = item.email;
        return (
            <View
                key={item.key}
                style={styles.container}>
                <Image
                    style={styles.ava}
                    source={res.avatar.blank_avatar}
                />
                <View style={styles.txtContainer}>
                    <Text style={{ color: '#CA2C2C', fontSize: 14, fontWeight: 'bold' }}>
                        {email}
                    </Text>
                    <Text style={{ color: '#000000', fontSize: 13, marginTop: 2 }}>
                        {comment}
                    </Text>
                    {this.renderStatus()}
                </View>
            </View>
        )
    }
}