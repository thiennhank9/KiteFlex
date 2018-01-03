import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import styles from '../Styles/Login.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebaseApp from '../../Firebase/config.js';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
            username: '',
            password: ''

        }
    }

    clickSignIn(username, password) {
        console.log(username + ' ' + password);
        firebaseApp.auth().signInWithEmailAndPassword(username, password)
        .then(() => {
            console.log('success')
        })
        .catch(() => {
            console.log('error')
        })
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
                    size={25}
                />
            </TouchableOpacity>
        )
    }

    renderInput() {
        return (
            <View>
                <View style={styles.containerInput}>
                    <Icon
                        name='user'
                        size={15}
                    />
                    <TextInput
                        style={{ flex: 1 }}
                        placeholder='Email Address'
                        placeholderTextColor='grey'
                        onChangeText={(username) => this.setState({username})}
                    />
                </View>
                <View style={styles.containerInput}>
                    <Icon
                        name='unlock-alt'
                        size={15}
                    />
                    <TextInput
                        style={{ flex: 1 }}
                        caretHidden={true}
                        placeholder='Password'
                        placeholderTextColor='grey'
                        onChangeText={(password) => this.setState({password})}
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
    renderTextUnderline() {
        return (
            <View style={styles.containerTextUnderline}>
                <TouchableOpacity>
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
    render() {
        return (
            <View style={styles.container}>
                {this.renderHeader()}
                {/* Icon logo */}
                <Icon
                    name='user-circle-o'
                    size={50}
                />
                {this.renderInput()}
                <View>
                    <Button
                        backgroundColor='blue'
                        raised
                        borderRadius={10}
                        icon={{ name: 'album' }}
                        title='Sign In'
                        onPress={()=> {
                            this.clickSignIn(this.state.username, this.state.password)}
                        }
                    />
                    {this.renderTextUnderline()}
                </View>
            </View>
        )
    }
}