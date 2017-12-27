import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, FlatList, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import styles from './Styles/SearchFilm.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '../APIs/TMDb_Config.js';
import { BallIndicator } from 'react-native-indicators';
export default class SearchFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textSearch: '',
            isSearching: false,
            isError: false,
            isEmpty: false, //is the results returned empty
            results: []
        }
    }

    onClickSearch() {
        this.state.results = [];
        this.state.isEmpty = false;
        this.setState({ 
            isError: false 
        });
        //Check to fetch and set indicator when only text search is not empty
        if (this.state.textSearch != '') {
            //Set state to render indicator while searching
            this.setState({
                isSearching: true
            })
            fetch(api.get_multi_search(this.state.textSearch))
                .then((response) => response.json())
                .then((responseJson) => {
                    let results = responseJson.results;
                    let list_results_to_render = [];
                    //if results is an empty array, then set state to render announcement no results
                    if (results.length == 0) {
                        return this.setState({
                            isSearching: false,
                            isEmpty: true
                        })
                    }
                    //now results can't be empty
                    let limit_results = (results.length > 8) ? 8 : results.length;
                    for (let i = 0; i < limit_results; i++) {
                        let element = results[i];
                        let media_type = element.media_type; //3 types: movie, tv, person
                        let objElement = {
                            key: i,
                            media_type: media_type,
                            id: element.id,
                            name: '' //depend on media type
                        }
                        //chekc media type to set field: name
                        if (media_type == 'movie') {
                            objElement.name = element.title
                        }
                        if (media_type == 'tv' || media_type == 'person') {
                            objElement.name = element.name
                        }
                        list_results_to_render.push(objElement);
                    }

                    this.setState({
                        isSearching: false,
                        results: list_results_to_render
                    })
                })
                .catch((err) => {
                    console.error(err)
                    this.setState({
                        isError: true
                    })
                })
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
                        color='slategray'
                    />
                </TouchableOpacity>
            )
        else
            return null;
    }

    renderMicIconOrBack() {
        if (this.props.icon = 'mic')
            return (
                <TouchableOpacity
                    onPress={() => this.recog()}>
                    <Icon
                        name='microphone'
                        style={[styles.icon, styles.customIconMicrophone]}
                    />
                </TouchableOpacity>
            )
        else
            return (
                <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}>
                    <Icons
                        name='ios-arrow-back'
                        size={30}
                    />
                </TouchableOpacity>
            )
    }

    renderItemResult(item) {
        return (
            <TouchableOpacity
                key={item.key}
                style={{ flexDirection: 'row' }}
            >
                <Text style={styles.textResult}> {item.name}</Text>
            </TouchableOpacity>
        )
    }
    renderListResults() {

        //render nothing when text search is null
        if (this.state.textSearch == '') {
            this.state.isEmpty = false;
            this.state.isSearching = false;
            this.state.results = [];
            return null;
        }

        if (this.state.isError) {
            return (
                <View style={styles.containerEmptyResult}>
                    {/* <View style={styles.greyLine}>
                    </View> */}
                    <Text style={styles.textResult}>
                        Errors occur while finding! Check your internet connection!
                    </Text>
                </View>
            )
        }
        //Case results return empty
        if (this.state.isEmpty) {
            return (
                <View style={styles.containerEmptyResult}>
                    {/* <View style={styles.greyLine}>
                    </View> */}
                    <Text style={styles.textResult}>
                        Can't find any results
                    </Text>
                </View>
            )
        }

        //render announcement empty result
        if (this.state.isSearching) {
            return (
                <View style={styles.containerIndicator}>
                    {/* <View style={styles.greyLine}>
                    </View> */}
                    <BallIndicator
                        color='gray'
                        size={30}
                    />
                </View>
            )
        }

        if (this.state.results.length != 0)
            return (
                <View style={styles.containerListResults}>
                    {/* <View style={styles.greyLine}>
                    </View> */}
                    <FlatList
                        data={this.state.results}
                        renderItem={({ item }) => this.renderItemResult(item)}
                    />
                </View>
            )
        return null;
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerHeader}>
                    <View style={[styles.containerSearchBar, styles.borderSearchBar]}>
                        {/* Container search and close and voice */}
                        <View style={styles.containerInput}>
                            {this.renderMicIconOrBack()}
                            <TextInput
                                value={this.state.textSearch}
                                style={styles.inputSearch}
                                placeholder='Search for a movie, tv show, person...'
                                placeholderTextColor='gray'
                                underlineColorAndroid='rgba(0,0,0,0)'
                                //clearButtonMode='while-editing' // only on IOS mode
                                blurOnSubmit={true}
                                onChangeText={(textSearch) => {
                                    this.state.textSearch = textSearch;
                                    if (this.state.textSearch == '')
                                        this.clearTextSearch();
                                    else
                                        this.onClickSearch();
                                }}
                            />
                            {this.renderClearButton()}
                        </View>
                        {/* Button search */}
                        <TouchableOpacity
                            onPress={() => this.onClickSearch()}
                            style={[styles.containerIcon, styles.CustomContainerIcon]}>
                            <Icon
                                name='magnify'
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                {this.renderListResults()}
            </View>
        )
    }
}