import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class ProfileScreen extends Component {
    render() {
        return (
            <View>
                <Text> Profile Screen</Text>
                <Button
                    title='Back to Home screen!'
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        )
    }
}