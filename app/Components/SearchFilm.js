import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, FlatList, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import styles from './Styles/SearchFilm.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '../APIs/TMDb_Config.js';
import { BallIndicator } from 'react-native-indicators';
import { jsUcfirst } from '../Utils/Utils.js';
import actionCreators from '../Redux/ActionsCreator.js';
//import Voice from 'react-native-voice';

export default class SearchFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textSearch: '',
            isSearching: false,
            isError: false,
            isEmpty: false, //is the results returned empty
            results: [],
            /*
            //state of voice only, just fucking care - me lazy =))
            recognized: '',
            pitch: '',
            error: '',
            end: '',
            started: '',
            results: [],
            partialResults: [],
            */
        }

        //bind function for voice only
        /*
        Voice.onSpeechStart = this.onSpeechStart.bind(this);
        Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
        Voice.onSpeechEnd = this.onSpeechEnd.bind(this);
        Voice.onSpeechError = this.onSpeechError.bind(this);
        Voice.onSpeechResults = this.onSpeechResults.bind(this);
        Voice.onSpeechPartialResults = this.onSpeechPartialResults.bind(this);
        Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged.bind(this);
        */
    }
    /*
    //Range start fucntion voice
    componentWillUnmount() {
        Voice.destroy().then(Voice.removeAllListeners);
    }

    onSpeechStart(e) {
        this.setState({
            started: '√',
        });
    }

    onSpeechRecognized(e) {
        this.setState({
            recognized: '√',
        });
    }

    onSpeechEnd(e) {
        this.setState({
            end: '√',
        });
    }

    onSpeechError(e) {
        this.setState({
            error: JSON.stringify(e.error),
        });
    }

    onSpeechResults(e) {
        // this.setState({
        //     results: e.value,
        // });
        this.state.results = e.value;

        this.setState({
            textSearch: this.state.results[0]
        })

    }

    onSpeechPartialResults(e) {
        this.setState({
            partialResults: e.value,
        });
    }

    onSpeechVolumeChanged(e) {
        this.setState({
            pitch: e.value,
        });
    }

    async _startRecognizing(e) {
        this.setState({
            recognized: '',
            pitch: '',
            error: '',
            started: '',
            results: [],
            partialResults: [],
            end: ''
        });
        try {
            await Voice.start('en-US');
        } catch (e) {
            console.error(e);
        }
    }

    async _stopRecognizing(e) {
        try {
            await Voice.stop();
        } catch (e) {
            console.error(e);
        }
    }

    async _cancelRecognizing(e) {
        try {
            await Voice.cancel();
        } catch (e) {
            console.error(e);
        }
    }

    async _destroyRecognizer(e) {
        try {
            await Voice.destroy();
        } catch (e) {
            console.error(e);
        }
        this.setState({
            recognized: '',
            pitch: '',
            error: '',
            started: '',
            results: [],
            partialResults: [],
            end: ''
        });
    }
    */
    //End voice
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
                            uri: api.url_get_poster(element.poster_path),
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

    onClickRecog() {

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
        if (this.props.icon == 'mic')
            return (
                <TouchableOpacity
                    //hidden={true}
                    onPress={
                        // this._startRecognizing.bind(this)
                        () => this.onClickRecog()}>
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
                    <Icon
                        name='arrow-left'
                        size={30}
                        color='red'
                    />
                </TouchableOpacity>
            )
    }

    renderItemResult(item) {
        
        //Set icon_name to render depends on media_type
        //default for type movie
        let icon_name = 'movie';
        let icon_color = 'gold';

        if (item.media_type == 'tv') {
            icon_name = 'television-classic';
            icon_color = 'firebrick'
        }
        if (item.media_type == 'person') {
            icon_name = 'account';
            icon_color = 'chocolate'
        }
        let media_type = jsUcfirst(item.media_type)
        item.id_movie = item.id;
        item.title = item.name;
        return (
            <View>
                <TouchableOpacity
                    key={item.key}
                    style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
                    onPress={() => {

                        //store.dispatch(actionCreators.send_id_movie(item.id));
                        this.props.navigation.navigate('DetailFilm', {objDetail: item});
                    }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon
                            style={{ margin: 5 }}
                            name={icon_name}
                            size={15}
                            color={icon_color}
                        />
                        <Text style={styles.textResult}> {item.name}</Text>
                    </View>
                    <Text style={styles.text_type}> ...{media_type}</Text>
                </TouchableOpacity>
                {/* render grey color between results */}
                <View style={{ height: 1.5, margin: 3, backgroundColor: 'grey' }}>
                </View>
            </View>
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
                        style={{ backgroundColor: 'black', borderRadius: 2, borderWidth: 1, borderColor: '#111111' }}
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