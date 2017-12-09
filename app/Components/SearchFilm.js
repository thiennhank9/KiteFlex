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
                <View style={[ styles.containerSearchBar, styles.borderSearchBar ]}>
                    {/* Container search and close and voice */}
                    <View style={styles.containerInput}>
                        <TextInput
                            value={this.state.textSearch}
                            style={[ styles.inputSearch, styles.customInputSearch ]}
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
                                style={[ styles.icon, styles.customIconMicrophone ]}
                            />
                        </TouchableOpacity>
                    </View>
                    {/* Button search */}
                    <View style={[ styles.containerIcon, styles.CustomContainerIcon ]}>
                        <Icon
                            name='magnify'
                            style={styles.icon}
                        />
                    </View>
                </View>
            </View>
        )
    }
}