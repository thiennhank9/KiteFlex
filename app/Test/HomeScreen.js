import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View>
                <Text> Home Screen</Text>
                <Button
                    title='Move to Profile screen!'
                    onPress={() => this.props.navigation.navigate('ProfileScreen')}
                />
            </View>
        )
    }
}