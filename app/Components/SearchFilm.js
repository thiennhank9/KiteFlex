import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import styles from './Styles/SearchFilm.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class SearchFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textSearch: ''
        }
    }

    clearTextSearch() {
        this.setState({
            textSearch: ''
        })
    }

    recog() {
        console.log('Recoging!')
    }

    renderClearButton() {
        if (this.state.textSearch != '')
            return (
                <TouchableOpacity
                    onPress={() => this.clearTextSearch()}>
                    <Icon
                        name='close-circle'
                        size={20}
                    />
                </TouchableOpacity>
            )
        else
            return null;
    }

    render() {
        return (
            <View style={styles.containerHeader}>
                <View style={styles.containerSearchBar}>
                    {/* Container search and close and voice */}
                    <View style={styles.containerInput}>
                        <TextInput
                            value={this.state.textSearch}
                            style={styles.inputSearch}
                            placeholder='Tìm kiếm Nhân đẹp trai'
                            placeholderTextColor='whitesmoke'
                            underlineColorAndroid='rgba(0,0,0,0)'
                            //clearButtonMode='while-editing' // only on IOS mode
                            blurOnSubmit={true}
                            onChangeText={(textSearch) => this.setState({ textSearch })}
                        />
                        {this.renderClearButton()}
                        {/* Button voice recog */}
                        <TouchableOpacity
                            onPress={() => this.recog()}>
                            <Icon
                                name='microphone'
                                size={30}
                                color='white'
                            />
                        </TouchableOpacity>
                    </View>
                    {/* Button search */}
                    <View style={styles.containerIcon}>
                        <Icon
                            name='magnify'
                            size={30}
                            color='white'
                        />
                    </View>
                </View>
            </View>
        )
    }
}