import React, { Component } from 'react';
import { View, ScrollView, Image, TouchableOpacity, Text, StatusBar } from 'react-native';
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

export default class DetailFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            obj: obj,
            isShowedInfo: false,
            isLoading: true,
            movie: {},
            reviews: [],
        }
    }

    async getData(url) {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }

    async getReviews(url) {
        console.log(url);
        let response = await fetch(url);
        let data = await response.json();
        return data.results;
    }

    componentDidMount() {
        const id_movie = store.getState().id_movie;
        (async () => {
            let movie = await this.getData(API.url_request_detail_movie(id_movie));
            let reviews = await this.getReviews(API.url_request_reviews_movie(id_movie));
            console.log(reviews);
            this.setState({ isLoading: false, movie, reviews });
        })();
    }

    render() {
        if (this.state.isLoading)
            return (
                <FetchingIndicator />
            );
        else
            return (
                <View style={{ flex: 1, backgroundColor: '#111111' }}>
                    <StatusBarApp />
                    <ScrollView style={{ backgroundColor: '#111111' }}>
                        {this.renderHeader()}
                        {this.renderImageFilm()}
                        {this.renderTitle()}
                        {this.renderIMDb()}
                        {this.renderNumberComment()}
                        {this.renderStar1()}
                        {this.renderDetail()}
                        {this.renderToRankStar()}
                        {this.renderListSameCategoryFilm()}
                        <ListComments />
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
                        name='ios-arrow-back'
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconSearch}>
                    <Icon
                        name='magnify'
                        size={36}
                        color='white'
                    />
                </TouchableOpacity>
            </View>
        )
    }

    renderImageFilm() {
        return (
            <View style={styles.imageFilmContainer}>
                <Image source={{ uri: API.url_get_image(this.state.movie.backdrop_path) }}
                    style={styles.imageBackground} />
                <Icon
                    name='play-circle-outline'
                    size={60}
                    color='red'
                />
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
                {this.state.movie.original_title}
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
                ({this.state.obj.numberMarkStar})
            </Text>
        )
    }
    //The first star
    renderStar1() {
        return (
            <View style={styles.star1Container}>
                {this.renderListStar(20, true)}
                <View style={styles.hori}>
                    <TouchableOpacity onPress={() => {console.log('touched bell, merry chirstmas')}}>
                        <Icon
                            name='bell-off'
                            size={25}
                            color='white'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {console.log('touched bookmark')}}>
                        <Icon
                            name='bookmark-plus'
                            size={25}
                            color='white'
                            style={{ marginLeft: 10 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {console.log('touched download')}}>
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
                {this.renderInfo('Đạo diễn :', this.state.obj.directors)}
                {this.renderInfo('Kịch bản :', this.state.obj.directors)}
                {this.renderInfo('Release Date :', this.state.movie.release_date)}
                {this.renderInfo('Amount :', this.state.movie.runtime)}
                {this.renderInfo('Countries :', this.state.movie.production_countries[0].name)}
                {this.renderInfo('Languages :', this.state.movie.spoken_languages[0].name)}
                {this.renderInfo('Diễn viên :', this.state.obj.directors)}
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
                            onPress={(index) => {console.log('Number of stars human rating is ' + (index + 1))}} />
                </View>
            </View>
        )
    }

    renderListSameCategoryFilm() {
        return (
            <View style={{ flexDirection: 'column' }}>
                <View style={{ height: 1, backgroundColor: 'grey', margin: 10 }}>
                </View>
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
}
