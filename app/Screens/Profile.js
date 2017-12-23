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
import { Button } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import windows from '../Themes/Windows.js';

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
                icon: 'alert-octagram'
            }
            ]
        }
    ];

export default class Profile extends Component {
    static navigationOptions = {
        tabBarLabel: 'Account',
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
            ds: objSystem,
            isRegistered: true
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
            <View>
                <Image style={{ height: 220 }}
                    source={{ uri: 'https://wallpaperscraft.com/image/blur_background_pink_orange_light_73376_602x339.jpg' }} />
                <View
                    style={styles.avatarContainer}
                    onPress={() => this.clickToSignIn()}>
                    <Image
                        style={styles.avatar}
                        source={res.avatar.blank_avatar}
                        resizeMode='stretch'
                    />
                    {
                        this.state.isRegistered ?
                            <View style={{ flexDirection: 'row', width:windows.width - 40,justifyContent: 'space-between', marginTop: 20 }}>
                                <Button
                                    buttonStyle={{ width: 120 }}
                                    rounded
                                    backgroundColor={'#D73E15'}
                                    icon={{ name: 'account-circle' }}
                                    title='Đăng nhập' />
                                <Button
                                    buttonStyle={{ width: 120 }}
                                    rounded
                                    backgroundColor={'#D73E15'}
                                    icon={{ name: 'create' }}
                                    title='Đăng ký' />
                            </View> :
                            <View style={{ marginTop: 20, alignItems: 'center' }}>
                                <Text style={{ color: 'white' }}>
                                    Xin chào Alexander!
                                </Text>
                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                    <Button
                                        buttonStyle={{ width: 120 }}
                                        rounded
                                        backgroundColor={'#D73E15'}
                                        icon={{ name: 'reply' }}
                                        title='Đăng xuất' />
                                    <Button
                                        buttonStyle={{ width: 120 }}
                                        rounded
                                        backgroundColor={'#D73E15'}
                                        icon={{ name: 'create' }}
                                        title='Sửa Profile' />
                                </View>
                            </View>
                    }
                </View>
            </View>
        )
    }

    renderTitleSetting(section) {
        return (
            <Text style={[styles.text, { color: '#D73E15', paddingLeft: 30, paddingTop: 5, paddingBottom: 5, fontSize: 18, backgroundColor: '#3f3f3f' }]}>
                {section.title}
            </Text>
        )
    }

    renderItemSetting(item) {
        return (
            <View>
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
                <View style={{ backgroundColor: '#3f3f3f', height: 1 }} />
            </View>
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