import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';

export default class TestRefs extends Component {
    focusTextInput() {
        this.textInput.focus();
    }
    clearTextInput() {
        this.textInput.clear();
    }
    render() {
        return (
            <View>
                <TextInput
                    ref={(input) => { this.textInput = input }}
                    placeholder='Nhập'
                />
                <Button
                    title='Focus Text Input'
                    onPress={() => this.focusTextInput()}
                />
                <Button
                    title='Clear Text Input'
                    onPress={() => this.clearTextInput()}
                />
            </View>
        )
    }
}