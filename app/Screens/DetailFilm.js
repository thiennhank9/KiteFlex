import React, { Component } from 'react';
import { View, ScrollView, Image, TouchableOpacity, Text, StatusBar, AsyncStorage, Button } from 'react-native';
import styles from './Styles/DetailFilm.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import obj from '../Objects/ObjDetailFilm.js';
import ListFilmByCategory from '../Containers/ListFilmByCategory.js';
import ListComments from '../Containers/ListComments.js';
import StatusBarApp from '../Components/StatusBarApp.js';
import FetchingIndicator from '../Components/FetchingIndicator';
import Rating from '../Components/Rating';
import API from '../APIs/TMDb_Config';
import YouTube from 'react-native-youtube';
import SearchFilm from '../Components/SearchFilm.js';
import ElevatedView from 'react-native-elevated-view'
import firebaseApp from '../Firebase/Config.js';
import actionCreators from '../Redux/ActionsCreator.js';

export default class DetailFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            obj: obj,
            isShowedInfo: false,
            isLoading: true,
            movie: {},
            error: '',
            isReady: false,
            status: '',
            quality: '',
            review_play: false,
            play_youtube: false,
            video_preview_id: 'No Video',
            colorStar: 'white',
            icon_name_bell: 'bell-off',
            nameStart: 'ios-star-outline',
        }
    }

    async getData(url) {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }

    async getIDVideo(url) {
        let response = await fetch(url);
        let data = await response.json();
        if (data.results.length === 0)
            return '3I8XHnow0BA';
        return data.results[0].key;
    }

    // This's for test with rating function
    async postRating(url, valueRating) {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
                value: valueRating
            }),
        });
    }

    async onClickFavorite() {
        if (!this.state.saved) {
            await AsyncStorage.setItem(`@FilmFavorite:${this.state.movie.id}`, JSON.stringify(this.state.movie));
        }
    }

    async onClickWathcLate() {
        if (!this.state.saved) {
            await AsyncStorage.setItem(`@FilmWatchLate:${this.state.movie.id}`, JSON.stringify(this.state.movie));
        }
    }

    clickToDownload() {
        const item = this.props.navigation.state.params.objDetail;
        const uid = store.getState().user.uid;
        const path_to_uid = `list_downloads/${uid}`;
        try {
            const root_path = firebaseApp.database().ref();
            root_path.once('value')
                .then(function (snapshot) {
                    if (snapshot.child(path_to_uid.toString()).exists()) {
                        let list_watched = snapshot.child(path_to_uid.toString()).val();
                        for (let i = 0; i < list_watched.length; i++) {
                            //check if item is added into firebase
                            if ((list_watched[i].media_type == item.media_type)
                                && (list_watched[i].id_movie == item.id_movie)) {
                                return;
                            }
                        }
                        //add new item into firebase
                        list_watched.unshift(item);
                        store.dispatch(actionCreators.send_list_downloads(list_watched));
                        let path = firebaseApp.database().ref(path_to_uid.toString());
                        path.update(list_watched)
                    }
                    else {
                        //add first item into firebase
                        let list_watched = [];
                        list_watched.unshift(item);
                        store.dispatch(actionCreators.send_list_downloads(list_watched));
                        let path = firebaseApp.database().ref(path_to_uid.toString());
                        path.update(list_watched)
                    }
                })
        }
        catch (error) {
        }
    }
    clickToWatchLater() {
        if (this.state.icon_name_bell == 'bell-off') {
            //case when turn out to click to watched later
            this.setState({
                icon_name_bell: 'bell'
            })

            const item = this.props.navigation.state.params.objDetail;
            const uid = store.getState().user.uid;
            const path_to_uid = `list_watch_later/${uid}`;
            try {
                const root_path = firebaseApp.database().ref();
                root_path.once('value')
                    .then(function (snapshot) {
                        if (snapshot.child(path_to_uid.toString()).exists()) {
                            let list_watched = snapshot.child(path_to_uid.toString()).val();
                            for (let i = 0; i < list_watched.length; i++) {
                                //check if item is added into firebase
                                if ((list_watched[i].media_type == item.media_type)
                                    && (list_watched[i].id_movie == item.id_movie)) {
                                    return;
                                }
                            }
                            //add new item into firebase
                            list_watched.unshift(item);
                            store.dispatch(actionCreators.send_list_watch_later(list_watched));
                            let path = firebaseApp.database().ref(path_to_uid.toString());
                            path.update(list_watched)
                        }
                        else {
                            //add first item into firebase
                            let list_watched = [];
                            list_watched.unshift(item);
                            store.dispatch(actionCreators.send_list_watch_later(list_watched));
                            let path = firebaseApp.database().ref(path_to_uid.toString());
                            path.update(list_watched)
                        }
                    })
            }
            catch (error) {
            }
        }
        else {
            //case not to watch later
            this.setState({
                icon_name_bell: 'bell-off'
            })

            //these code below add to firebase, so just don't mind
            const item = this.props.navigation.state.params.objDetail;
            const uid = store.getState().user.uid;
            const path_to_uid = `list_watch_later/${uid}`;
            try {
                const root_path = firebaseApp.database().ref();
                root_path.once('value')
                    .then(function (snapshot) {
                        if (snapshot.child(path_to_uid.toString()).exists()) {
                            let list_watched = snapshot.child(path_to_uid.toString()).val();
                            //filter the item in firebase that's same as item now
                            list_watched = list_watched.filter(item_firebase => {
                                ((item_firebae.media_type != item.media_type)
                                    || (item_firebase.id_movie != item.id_movie))
                            })
                            store.dispatch(actionCreators.send_list_watch_later(list_watched));
                            let path = firebaseApp.database().ref(path_to_uid.toString());
                            path.update(list_watched)
                        }
                        else {
                            //do nothing here
                        }
                    })

            }
            catch (error) {
            }
        }
    }
    // just for testing with favorite function and more...
    async cripping() {
        let favoriteFilm = [];
        let result = await AsyncStorage.getAllKeys();
        result.forEach(async (key, index) => {
            if (key.search(/@FilmFavorite/i) !== -1) {
                let value = await AsyncStorage.getItem(key);
                let prased = JSON.parse(value);
                favoriteFilm[index] = {};
                favoriteFilm[index] = prased;
            }
        });
    }

    componentDidMount() {
        const item = this.props.navigation.state.params.objDetail;
        //const id_movie = store.getState().id_movie;
        const id_movie = item.id_movie;
        this.addToListWatched();
        (async () => {
            let movie = await this.getData(API.url_request_detail_movie(id_movie));
            let video_preview_id = await this.getIDVideo(API.url_request_video_demo(id_movie));
            this.setState({ isLoading: false, movie, video_preview_id });
        })();
    }
    //clickToFavorites
    changeColorStar() {
        if (this.state.colorStar === 'white') {
            this.setState({ colorStar: 'yellow', nameStart: 'md-star' });
            //these code below add to firebase, so just don't mind
            const item = this.props.navigation.state.params.objDetail;
            const uid = store.getState().user.uid;
            const path_to_uid = `list_favorites/${uid}`;
            try {
                const root_path = firebaseApp.database().ref();
                root_path.once('value')
                    .then(function (snapshot) {
                        if (snapshot.child(path_to_uid.toString()).exists()) {
                            let list_watched = snapshot.child(path_to_uid.toString()).val();
                            for (let i = 0; i < list_watched.length; i++) {
                                //check if item is added into firebase
                                if ((list_watched[i].media_type == item.media_type)
                                    && (list_watched[i].id_movie == item.id_movie)) {
                                    return;
                                }
                            }
                            //add new item into firebase
                            list_watched.unshift(item);
                            store.dispatch(actionCreators.send_list_favorites(list_watched));
                            let path = firebaseApp.database().ref(path_to_uid.toString());
                            path.update(list_watched)
                        }
                        else {
                            //add first item into firebase
                            let list_watched = [];
                            list_watched.unshift(item);
                            let path = firebaseApp.database().ref(path_to_uid.toString());
                            store.dispatch(actionCreators.send_list_favorites(list_watched));
                            path.update(list_watched)
                        }
                    })

            }
            catch (error) {
            }
        }

        if (this.state.colorStar === 'yellow') {
            this.setState({ colorStar: 'white', nameStart: 'ios-star-outline' });
            //these code below add to firebase, so just don't mind
            const item = this.props.navigation.state.params.objDetail;
            const uid = store.getState().user.uid;
            const path_to_uid = `list_favorites/${uid}`;
            try {
                const root_path = firebaseApp.database().ref();
                root_path.once('value')
                    .then(function (snapshot) {
                        if (snapshot.child(path_to_uid.toString()).exists()) {
                            let list_watched = snapshot.child(path_to_uid.toString()).val();
                            //filter the item in firebase that's same as item now
                            list_watched = list_watched.filter(item_firebase => {
                                ((item_firebae.media_type != item.media_type)
                                    || (item_firebase.id_movie != item.id_movie))
                            })
                            store.dispatch(actionCreators.send_list_favorites(list_watched));
                            let path = firebaseApp.database().ref(path_to_uid.toString());
                            path.update(list_watched)
                        }
                        else {
                            //do nothing here
                        }
                    })

            }
            catch (error) {
            }
        }
    }

    addToListWatched() {
        const item = this.props.navigation.state.params.objDetail;
        const uid = store.getState().user.uid;
        const path_to_uid = `list_watched/${uid}`;
        try {
            const root_path = firebaseApp.database().ref();
            root_path.once('value')
                .then(function (snapshot) {
                    if (snapshot.child(path_to_uid.toString()).exists()) {
                        let list_watched = snapshot.child(path_to_uid.toString()).val();
                        for (let i = 0; i < list_watched.length; i++) {
                            if ((list_watched[i].media_type == item.media_type)
                                && (list_watched[i].id_movie == item.id_movie)) {
                                return;
                            }
                        }
                        list_watched.unshift(item);
                        let path = firebaseApp.database().ref(path_to_uid.toString());
                        path.update(list_watched)
                        store.dispatch(actionCreators.send_list_recents(list_watched));
                    }
                    else {
                        let list_watched = [];
                        list_watched.unshift(item);
                        let path = firebaseApp.database().ref(path_to_uid.toString());
                        path.update(list_watched)
                        store.dispatch(actionCreators.send_list_recents(list_watched));
                    }
                })

        }
        catch (error) {

        }
        // let list_watched_json = await AsyncStorage.getItem('list_watched');
        // let list_watched_array = JSON.parse(list_watched_json);

        // list_watched.push(item);
        // await AsyncStorage.setItem('list_watched', list_watched);
        // list_watched = await JSON.parse(AsyncStorage.getItem('list_watched'));
    }

    render() {
        const item = this.props.navigation.state.params.objDetail;
        if (this.state.isLoading)
            return (
                <FetchingIndicator />
            );
        else
            return (
                <View style={{ flex: 1, backgroundColor: '#111111' }}>
                    <StatusBarApp />
                    <SearchFilm icon='back' navigation={this.props.navigation} />
                    <ScrollView style={{ backgroundColor: '#111111' }}>
                        {this.renderImageFilm()}
                        {this.renderTitle()}
                        {this.renderIMDb()}
                        {this.renderNumberComment()}
                        {this.renderStar1()}
                        {this.renderDetail()}
                        {this.renderToRankStar()}
                        {this.renderTrailerFilm()}
                        {this.renderListSameCategoryFilm()}
                        {this.renderListSimilarFilm()}
                        {this.renderListCastFilm()}
                        <ListComments item={item} />
                    </ScrollView>
                </View>
            );
    }

    renderHeader() {
        return (
            <View style={styles.containerBackAndSearch}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}>
                    <Icons
                        name='arrow-left'
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconSearch}>
                    <Icons
                        name='magnify'
                        size={36}
                        color='white'
                    />
                </TouchableOpacity>
            </View>
        )
    }

    renderImageFilm() {
        if (this.state.video_preview_id === 'No Video')
            return null;
        return (
            <View style={styles.imageFilmContainer}>
                <View
                    style={styles.imageBackdrop}>
                    <Image source={{ uri: API.url_get_image(this.state.movie.backdrop_path) }}
                        style={styles.imageBackground} />
                    <View style={styles.backDropOpacity} />

                    <TouchableOpacity style={styles.star} onPress={() => { this.changeColorStar() }}>
                        <Icons name={this.state.nameStart} size={24} color={this.state.colorStar} />
                    </TouchableOpacity>
                    <Text style={styles.title_on_backdrop}>{this.state.movie.title}</Text>
                </View>
                <ElevatedView style={styles.imagePoster}
                    elevation={10} >
                    <Image source={{ uri: API.url_get_poster(this.state.movie.poster_path) }}
                        style={styles.imageBackground} />
                </ElevatedView>
                <Text style={styles.text_views}>
                    Views: 12
                </Text>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('PlayVideo', { item: this.props.navigation.state.params.objDetail })}
                    style={styles.watchbutton}>
                    <Text style={styles.textWatch}>Watch</Text>
                    <View style={styles.iconPlay}>
                        <Icons name='md-play' size={22} color='tomato' style={{ marginLeft: 2 }} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    renderTitle() {
        return (
            <Text
                style={styles.textTitle}
                numberOfLines={3}
                ellipsizeMode='tail'
            >
                {this.state.movie.title}
            </Text>
        )
    }

    renderIMDb() {
        return (
            <View style={styles.IMDbContainer}>
                <View style={styles.hori}>
                    <Text style={styles.textIMDb}>
                        IMDb
                    </Text>
                    <Text style={styles.textMark}>
                        {/* we don't have IMDb'property */}
                        {this.state.movie.vote_average}/10 (0)
                    </Text>
                </View>
                <View style={styles.hori}>
                    <Text style={styles.textHD}>
                        HD
                    </Text>
                    <Text style={styles.textVN}>
                        VN
                    </Text>
                </View>
            </View>
        )
    }

    renderNumberComment() {
        return (
            <View style={styles.hori}>
                <Text style={styles.textNumberComment}>
                    Comments ({this.state.obj.numberComments})
                </Text>
                <Icon
                    name='arrow-down'
                    size={15}
                    color='white'
                />
            </View>
        )
    }

    renderListStar(size, isShowedNumber) {
        return (
            <View style={styles.hori}>
                <Icon
                    name='star-outline'
                    size={size}
                    color='yellow'
                />
                <Icon
                    name='star-outline'
                    size={size}
                    color='yellow'
                    style={{ marginLeft: 10 }}
                />
                <Icon
                    name='star-outline'
                    size={size}
                    color='yellow'
                    style={{ marginLeft: 10 }}
                />
                <Icon
                    name='star-outline'
                    size={size}
                    color='yellow'
                    style={{ marginLeft: 10 }}
                />
                <Icon
                    name='star-outline'
                    size={size}
                    color='yellow'
                    style={{ marginLeft: 10 }}
                />
                {isShowedNumber && this.renderTextNumberMarkStar()}

            </View>
        )
    }

    renderTextNumberMarkStar() {
        return (
            <Text style={styles.textNumberMarkStar}>
                ({this.state.movie.vote_count})
            </Text>
        )
    }
    //The first star
    renderStar1() {
        return (
            <View style={styles.star1Container}>
                {this.renderListStar(20, true)}
                <View style={styles.hori}>
                    <TouchableOpacity onPress={() => this.clickToWatchLater()}>
                        <Icon
                            name={this.state.icon_name_bell}
                            size={25}
                            color='white'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onClickFavorite.bind(this)}>
                        <Icon
                            name='bookmark-plus'
                            size={25}
                            color='white'
                            style={{ marginLeft: 10 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.clickToDownload()}>
                        <Icon
                            name='download'
                            size={25}
                            color='white'
                            style={{ marginLeft: 10 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    renderInfo(major, info) {
        return (
            <View style={styles.hori}>
                <Text style={styles.textMajor}>
                    {major}
                </Text>
                <Text style={styles.textInfo}>
                    {info}
                </Text>
            </View>
        )
    }

    renderListInfo() {
        let Countries = (this.state.movie.production_countries.length !== 0) ? this.state.movie.production_countries[0].name : 'N/A';
        let Languages = (this.state.movie.spoken_languages.length !== 0) ? this.state.movie.spoken_languages[0].name : 'N/A';

        let Director = [];
        let Writer = [];
        let DienVien = [];

        let string_Director = '';
        let string_Writer = '';
        let stirng_DienVien = '';

        this.state.movie.credits.crew.map((item, index) => {
            if (item.hasOwnProperty('job')) {
                if (item.job === 'Director') {
                    Director.push(item);
                    string_Director += item.name + ',';
                } else if (item.job === 'Writer') {
                    Writer.push(item);
                    string_Writer += item.name + ', ';
                } else {

                }
            }
        });

        for (let index = 0; index < 3; index++) {
            DienVien.push(this.state.movie.credits.cast[index]);
            stirng_DienVien += this.state.movie.credits.cast[index].name + ', ';
        }

        if (!this.state.isShowedInfo)
            return (
                <TouchableOpacity
                    onPress={() => { this.setState({ isShowedInfo: true }) }}>
                    <Text style={styles.textSeeMore}>
                        More Info
                    </Text>
                </TouchableOpacity>
            )

        return (
            <View style={{ marginTop: 5 }}>
                {this.renderInfo('Director :', string_Director)}
                {this.renderInfo('Writer :', string_Writer)}
                {this.renderInfo('Release Date :', this.state.movie.release_date)}
                {this.renderInfo('Amount :', this.state.movie.runtime)}
                {this.renderInfo('Countries :', Countries)}
                {this.renderInfo('Languages :', Languages)}
                {this.renderInfo('Diễn viên :', stirng_DienVien)}
            </View>
        )
    }

    renderDetail() {
        return (
            <View style={styles.detailContainer}>
                {/* How to make text align android */}
                <Text style={styles.textDetail}>
                    {this.state.movie.overview}
                </Text>
                {this.renderListInfo()}
            </View>
        )
    }

    renderToRankStar() {
        return (
            <View>
                <View style={{ height: 1, backgroundColor: 'grey', margin: 10 }}>
                </View>
                <View style={styles.rankStartContainer}>
                    <Text style={styles.textNumberComment}>
                        Rating Film
                    </Text>
                    <Rating size={30}
                        onPress={(index) => { }} />
                </View>
                <View style={{ height: 1, backgroundColor: 'grey', margin: 10 }} />
            </View>
        )
    }

    renderListSameCategoryFilm() {
        return (
            <View style={{ flexDirection: 'column' }}>
                <Text style={styles.titleCategory}>
                    Recommendations
                </Text>
                <ListFilmByCategory
                    genre_id={this.state.movie.genres[0].id}
                    navigation={this.props.navigation} />
                <View style={{ height: 1, backgroundColor: 'grey', margin: 10 }}>
                </View>
            </View>
        )
    }

    renderListSimilarFilm() {
        return (
            <View style={{ flexDirection: 'column' }}>
                <Text style={styles.titleCategory}>
                    Similar
                </Text>
                <ListFilmByCategory
                    similar_id={this.state.movie.id}
                    navigation={this.props.navigation} />
                <View style={{ height: 1, backgroundColor: 'grey', margin: 10 }}>
                </View>
            </View>
        )
    }

    renderListCastFilm() {
        return (
            <View style={{ flexDirection: 'column' }}>
                <Text style={styles.titleCategory}>
                    Cast
                </Text>
                <ListFilmByCategory
                    person_detail_id={this.state.movie.id}
                    navigation={this.props.navigation} />
                <View style={{ height: 1, backgroundColor: 'grey', margin: 10 }}>
                </View>
            </View>
        )
    }

    renderTrailerFilm() {
        return (
            <View style={{ flexDirection: 'column' }}>
                <Text style={styles.titleCategory}>
                    Trailer
                </Text>
                <View style={styles.trailer} >
                    <YouTube
                        apiKey='AIzaSyBeR28f0U8cz_1TNY6rmajH5wBrheEvkPY'
                        videoId={this.state.video_preview_id}   // The YouTube video ID
                        play={this.state.play_youtube}             // control playback of video with true/false
                        fullscreen={false}       // control whether the video should play in fullscreen or inline
                        loop={false}             // control whether the video should loop when ended
                        onReady={e => this.setState({ isReady: true })}
                        onChangeState={e => this.setState({ status: e.state })}
                        onChangeQuality={e => this.setState({ quality: e.quality })}
                        onError={e => { this.setState({ error: e.error }); }}
                        style={[{ alignSelf: 'stretch' }, styles.imageBackground]}
                    />
                </View>
                <View style={{ height: 1, backgroundColor: 'grey', margin: 10 }}>
                </View>
            </View>
        )
    }
}
