import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import { CheckBox, Button, SocialIcon } from 'react-native-elements';
import styles from '../Styles/Login.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebaseApp from '../../Firebase/Config.js';
import LinearGradient from 'react-native-linear-gradient';
import actionCreators from '../../Redux/ActionsCreator.js';
import {resetAction} from '../../Navigators/NavigationActions.js';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
            username: '',
            password: ''
        }
    }

    clickSignIn(email, password) {
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                firebaseApp.auth().onAuthStateChanged(function (user) {
                    if (user) {
                        let currentUser = {
                            email: user.email,
                            uid: user.uid
                        }
                        store.dispatch(actionCreators.send_current_user(currentUser));
                        this.props.navigation.dispatch(resetAction);
                        console.log('goback')
                    }
                }.bind(this))
            })
            .catch((error) => {
                ToastAndroid.show(error.toString(), ToastAndroid.SHORT)
            })
        
    }
    goBack() {
        this.props.navigation.goBack();
    }
    renderHeader() {
        return (
            <TouchableOpacity
                style={styles.containerHeader}
                onPress={() => {
                    console.log('Pressed!')
                    this.props.navigation.goBack();
                }}>
                <Icon
                    name='arrow-circle-left'
                    size={30}
                    style={styles.iconBack}
                    color='tomato'
                />
            </TouchableOpacity>
        )
    }

    renderInput() {
        return (
            <View style={styles.containerInput}>
                {/* Username input */}
                <View style={styles.input}>
                    <Icon
                        style={{ marginTop: 5 }}
                        name='user'
                        size={25}
                    />
                    <TextInput
                        style={{ flex: 1, margin: 5 }}
                        placeholder='Email Address'
                        placeholderTextColor='grey'
                        onChangeText={(username) => this.setState({ username })}
                    />
                </View>
                {/* Password input */}
                <View style={styles.input}>
                    <Icon
                        style={{ marginTop: 5 }}
                        name='unlock-alt'
                        size={25}
                    />
                    <TextInput
                        style={{ flex: 1, margin: 5 }}
                        caretHidden={true}
                        secureTextEntry={true}
                        placeholder='Password'
                        placeholderTextColor='grey'
                        onChangeText={(password) => this.setState({ password })}
                    />
                </View>
                <View
                    style={{ flexDirection: 'row' }}>
                    <CheckBox
                        containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                        title='Sign-In Automatically'
                        checked={this.state.isChecked}
                        onPress={() => this.setState({
                            isChecked: !this.state.isChecked
                        })}
                    />
                </View>
            </View>
        )
    }

    renderButton() {
        return (
            // <LinearGradient colors={['#4ca1af', '#c4e0e5']} style={styles.containerButton}>>
                <TouchableOpacity
                    style={styles.containerButton}
                    onPress={() => this.clickSignIn(this.state.username, this.state.password)}>        
                    <Text>
                        Sign In
                    </Text>
                    <Icon
                        style={{marginLeft: 10}}
                        name='sign-in'
                        size={20}
                    />
                </TouchableOpacity>
            // </LinearGradient>
        )
    }
    renderTextUnderline() {
        return (
            <View style={styles.containerTextUnderline}>
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.textUnderline}>
                        Create new account
                </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.textUnderline}>
                        Forget password
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    renderSocialIcons() {
        return (
            <View style={styles.containerSocialIcons}>
                <TouchableOpacity>
                    <SocialIcon
                        style={styles.socialIcon}
                        iconSize={20}
                        raised
                        type='twitter'
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SocialIcon
                        style={styles.socialIcon}
                        iconSize={20}
                        raised
                        type='facebook'
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SocialIcon
                        style={styles.socialIcon}
                        iconSize={20}
                        raised
                        type='google-plus-official'
                    />
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        return (
            <LinearGradient colors={['#000000', '#434343']}style={styles.container}>
                {this.renderHeader()}
                <View style={styles.containerBody}>
                    {/* Icon logo */}
                    <Icon
                        style={styles.logo}
                        name='user-circle-o'
                        size={100}
                    />
                    {this.renderInput()}
                    {this.renderButton()}
                    {this.renderTextUnderline()}
                </View>
                {this.renderSocialIcons()}
            </LinearGradient>
        )
    }
}