import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    SectionList,
    StatusBar
} from 'react-native';
import styles from './Styles/Profile.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import res from '../Resources/index.js';

const objSystem =
    [
        {
            title: 'Hệ thống',
            data: [{
                name: 'Cài đặt',
                icon: 'settings'
            }, {
                name: 'Thông tin ứng dụng',
                icon: 'help-circle'
            }, {
                name: 'Phản hồi',
                icon: 'exclamation'
            }
            ]
        }
    ];

export default class Profile extends Component {
    static navigationOptions = {
        tabBarLabel: 'Thêm',
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name='menu'
                size={24}
                style={{ color: tintColor }}
            />
        )
    }
    constructor(props) {
        super(props);
        this.state = {
            ds: objSystem
        }
    }
    clickToSignIn() {
        console.log('Clicked to sign in!')
    }
    clickToSetSetting() {
        console.log('Clicked to set settings!')
    }
    renderAvatar() {
        return (
            <TouchableOpacity
                style={styles.avatarContainer}
                onPress={() => this.clickToSignIn()}>
                <Image
                    style={styles.avatar}
                    source={res.avatar.blank_avatar}
                    resizeMode='stretch'
                />
                <Text>
                    Đăng nhập
                </Text>
            </TouchableOpacity>
        )
    }

    renderTitleSetting(section) {
        return (
            <Text style={styles.text}>
                {section.title}
            </Text>
        )
    }
    renderItemSetting(item) {
        return (
            <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => this.clickToSetSetting()}>
                <Icon
                    name={item.icon}
                    size={30}
                    style={styles.icon}
                />
                <Text
                    numberOfLines={2}
                    style={styles.text}>
                    {item.name}
                </Text>
            </TouchableOpacity>
        )
    }
    renderSectionSetting() {
        return (
            <SectionList
                sections={this.state.ds}
                renderItem={({ item }) => this.renderItemSetting(item)}
                renderSectionHeader={({ section }) => this.renderTitleSetting(section)}
            />
        )
    }
    render() {

        return (
            <View style={styles.container}>
                {this.renderAvatar()}
                {this.renderSectionSetting()}
            </View>
        )
    }
}