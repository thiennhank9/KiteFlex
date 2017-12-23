import React, {Component} from 'react'
import {StatusBar, Text, Image, View, StyleSheet, Dimensions, TouchableOpacity, Animated, Easing, ScrollView, TextInput} from 'react-native'
// import {Images} from '../../Themes'
import Icons from 'react-native-vector-icons/Ionicons'

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

export default class LaunchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPass: true,
            press: false,
            isLoading: false
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
        if (this.state.isLoading) return;

        this.setState({isLoading: true});
        Animated.timing(
            this.buttonAnimated,
            {
                toValue: 1,
                duration: 200,
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
        }, 2300);
    }

    _onGrow() {
        Animated.timing(
            this.growAnimated,
            {
                toValue: 1,
                duration: 200,
                easing: Easing.linear
            }
        ).start();
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
                <Image style={styles.wallpaper} source={{uri: 'https://i.pinimg.com/736x/25/49/28/2549288722de52f12d4747a538e5ae06--iphone-backgrounds-cute-backgrounds-wallpapers.jpg'}} resizeMode='cover'/>
                <ScrollView>
                    <Image style={styles.logo} source={{uri: 'http://static.appstore.vn/a/uploads/thumbnails/022017/aphim-xem-phim-hd-online_icon.png'}}/>
                    <View style={{marginTop: 150}}/>
                    <View style={styles.inputWrapper}>
                        <Icons name='ios-person'
                               style={{fontSize: 25, color: 'white', position: 'absolute', marginLeft: 40}}
                        />
                        <TextInput style={styles.input}
                                   placeholder='Username'
                                   placeholderTextColor='white'
                                   underlineColorAndroid='transparent' />
                    </View>
                    <View style={{marginTop: 20}}/>
                    <View style={styles.inputWrapper}>
                        <Icons name='ios-key'
                               style={{fontSize: 25, color: 'white', position: 'absolute', marginLeft: 40}}
                        />
                        <TextInput style={styles.input}
                                   placeholder='Password'
                                   placeholderTextColor='white'
                                   underlineColorAndroid='transparent' />
                    </View>
                    {/*<TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.btnEye}
                        onPress={this.showPass}>
                        <Image source={Images.icEye} style={styles.iconEye}/>
                    </TouchableOpacity>*/}
                </ScrollView>
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
                        <Animated.View style={[styles.circle, {transform: [{scale: changeScale}]}]}/>
                    </Animated.View>
                </View>
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
        marginTop: 70
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
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F035E0',
        height: MARGIN,
        borderRadius: 20,
        zIndex: 100,
    },
    circle: {
        height: MARGIN,
        width: MARGIN,
        marginTop: -MARGIN,
        borderWidth: 1,
        borderColor: '#F035E0',
        borderRadius: 100,
        alignSelf: 'center',
        zIndex: 99,
        backgroundColor: '#F035E0',
    },
    text: {
        color: 'white',
        backgroundColor: 'transparent',
    },
    image: {
        width: 24,
        height: 24,
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
