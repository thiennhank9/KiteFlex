import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';

const key = 'test_async_storage';
export default class TestAsyncStorage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: ''
        }
    }

    componentWillMount() {
        //this.setItem();
    }

    // async setItem() {
    //     try {
    //         await AsyncStorage.setItem(key, 'Set item 1')
    //     } catch (error) {
    //         console.log(error.toString())
    //     }
    // }

    componentDidMount() {
        this.getItem();
    }

    async getItem() {
        try {
            const item = await AsyncStorage.getItem(key);
            this.setState({
                item: item
            })
        } catch (error) {
            console.log(error.toString())
        }
    }
    render() {
        return (
            <View>
                <Text>
                    {this.state.item}
                </Text>
            </View>
        )
    }
}