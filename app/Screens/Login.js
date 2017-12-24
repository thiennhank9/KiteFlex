import React, {Component} from 'react'
import {StatusBar, Text, Image, View, StyleSheet, Dimensions, TouchableOpacity, Animated, Easing, ScrollView, TextInput, Alert} from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'
import {firebaseApp} from "../Components/FirebaseConfig"
import actionCreators from '../Redux/ActionsCreator.js';
import {resetAction} from '../Navigators/NavigationActions.js';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;


export default class LaunchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPass: true,
            press: false,
            isLoading: false,
            email: null,
            password: null
        };
        this.showPass = this.showPass.bind(this);

        this.buttonAnimated = new Animated.Value(0);
        this.growAnimated = new Animated.Value(0);
        this._onPress = this._onPress.bind(this);
    }

    showPass() {
        this.state.press === false ? this.setState({showPass: false, press: true}) : this.setState({
            showPass: true,
            press: false
        });
    }

    _onPress() {
        this.onSignin()
        if (this.state.isLoading) return;

        this.setState({isLoading: true});
        Animated.timing(
            this.buttonAnimated,
            {
                toValue: 1,
                duration: 500,
                easing: Easing.linear
            }
        ).start();

        setTimeout(() => {
            this._onGrow();
        }, 2000);

        setTimeout(() => {
            // this.props.navigation.navigate('SecondScreen', {})
            this.setState({isLoading: false});
            this.buttonAnimated.setValue(0);
            this.growAnimated.setValue(0);
        }, 4000);
    }

    _onGrow() {
        Animated.timing(
            this.growAnimated,
            {
                toValue: 1,
                duration: 500,
                easing: Easing.linear
            }
        ).start();
    }

    onSignin () {
        console.log('onSignin', this.state.email + '/' + this.state.password)
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                firebaseApp.auth().onAuthStateChanged((user) => {
                    if (user) {
                        store.dispatch(actionCreators.send_uuid(user.uid))
                        console.log(store.getState().uuid)
                        this.props.navigation.dispatch(resetAction)
                    }
                })
            })
            .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
                Alert.alert(
                    'Something went wrong!',
                    errorMessage,
                    [
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
                )
            console.log(error.message)
        })
    }

    render() {
        const changeWidth = this.buttonAnimated.interpolate({
            inputRange: [0, 1],
            outputRange: [DEVICE_WIDTH - MARGIN, MARGIN]
        });
        const changeScale = this.growAnimated.interpolate({
            inputRange: [0, 1],
            outputRange: [1, MARGIN]
        });

        return (
            <View>
                <StatusBar translucent={true} backgroundColor='transparent' barStyle='light-content'/>
                <Image style={styles.wallpaper} source={{uri: 'https://wallpapercave.com/wp/dxaDz8c.jpg'}} resizeMode='cover'/>
                <Animated.View style={[styles.circle, {transform: [{scale: changeScale}]}]}/>
                <ScrollView>
                    <Image style={styles.logo} source={{uri: 'http://static.appstore.vn/a/uploads/thumbnails/022017/aphim-xem-phim-hd-online_icon.png'}}/>
                    <View style={{marginTop: 150}}/>
                    <View style={styles.inputWrapper}>
                        <Icons name='ios-person'
                               style={{fontSize: 25, color: 'white', position: 'absolute', marginLeft: 40}}
                        />
                        <TextInput style={styles.input}
                                   placeholder='Email'
                                   placeholderTextColor='white'
                                   underlineColorAndroid='transparent'
                                   onChangeText={text => this.setState({email: text})}
                                   value={this.state.email}
                        />
                    </View>
                    <View style={{marginTop: 20}}/>
                    <View style={styles.inputWrapper}>
                        <Icons name='ios-lock'
                               style={{fontSize: 25, color: 'white', position: 'absolute', marginLeft: 40}}
                        />
                        <TextInput style={styles.input}
                                   placeholder='Password'
                                   placeholderTextColor='white'
                                   underlineColorAndroid='transparent'
                                   secureTextEntry
                                   onChangeText={text => this.setState({password: text})}
                                   value={this.state.password}
                        />
                    </View>
                    <View style={styles.container}>
                        <Animated.View style={{width: changeWidth}}>
                            <TouchableOpacity style={styles.button}
                                              onPress={this._onPress}
                                              activeOpacity={1}>
                                {this.state.isLoading ?
                                    <Image source={{uri: 'https://i.stack.imgur.com/181Qp.gif'}} style={styles.image}/>
                                    :
                                    <Text style={styles.text}>LOGIN</Text>
                                }
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    wallpaper: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    logo: {
        alignSelf: 'center',
        marginTop: 70,
        width: 80,
        height: 80
    },
    btnEye: {
        position: 'absolute',
        top: 55,
        right: 28,
    },
    iconEye: {
        marginTop: 365,
        width: 25,
        height: 25,
        tintColor: 'rgba(0,0,0,0.2)',
    },
    container: {
        flex: 1,
        marginTop: 80,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        height: MARGIN,
        borderRadius: 20,
        zIndex: 100,
    },
    circle: {
        height: MARGIN,
        width: MARGIN,
        marginTop: -MARGIN,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 100,
        alignSelf: 'center',
        zIndex: 99,
        backgroundColor: 'red',
    },
    text: {
        color: 'white',
        backgroundColor: 'transparent',
    },
    image: {
        width: 120,
        height: 120,
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: DEVICE_WIDTH - 40,
        height: 40,
        marginHorizontal: 20,
        paddingLeft: 45,
        paddingRight: 35,
        borderRadius: 20,
        color: '#ffffff',
        fontSize: 16,
    },
    inputWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inlineImg: {
        position: 'absolute',
        fontSize: 25,
        color: 'red',
        zIndex: 99,
        width: 22,
        height: 22,
        left: 35,
        top: 42,
    }
});
