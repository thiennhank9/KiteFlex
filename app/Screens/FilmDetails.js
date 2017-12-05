import React, {Component} from "react";
import {View, ScrollView, Image, TouchableOpacity, Text, FlatList, StyleSheet, RefreshControl} from 'react-native'
import {SliderFilm} from '../Components/index.js';
import Styles from './Styles/DetailFilm.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import obj from '../Objects/ObjDetailFilm.js';
import ListFilmByCategory from '../Containers/ListFilmByCategory.js';
import ListComments from '../Containers/ListComments.js';
import ItemFilm from '../Components/ItemFilm'

const tl = [
    {
        'name': 'Action',
        'img': 'https://s.aphim.co/uploads/film/images/banner/20171031/034393dddae70fe970b74d9aa0972613.jpg'
    },
    {
        'name': 'Action',
        'img': 'https://s.aphim.co/uploads/film/images/banner/20171031/034393dddae70fe970b74d9aa0972613.jpg'
    },
    {
        'name': 'Action',
        'img': 'https://s.aphim.co/uploads/film/images/banner/20171031/034393dddae70fe970b74d9aa0972613.jpg'
    },
    {
        'name': 'Action',
        'img': 'https://s.aphim.co/uploads/film/images/banner/20171031/034393dddae70fe970b74d9aa0972613.jpg'
    },
    {
        'name': 'Action',
        'img': 'https://s.aphim.co/uploads/film/images/banner/20171031/034393dddae70fe970b74d9aa0972613.jpg'
    },
    {
        'name': 'Action',
        'img': 'https://s.aphim.co/uploads/film/images/banner/20171031/034393dddae70fe970b74d9aa0972613.jpg'
    },
    {
        'name': 'Action',
        'img': 'https://s.aphim.co/uploads/film/images/banner/20171031/034393dddae70fe970b74d9aa0972613.jpg'
    },
    {
        'name': 'Action',
        'img': 'https://s.aphim.co/uploads/film/images/banner/20171031/034393dddae70fe970b74d9aa0972613.jpg'
    }
]

export default class DetailFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRefreshing: false,
            obj: obj,
            isShowedInfo: false
        }
    }

    renderList(item) {
        return (
            <ItemFilm />
        )
    }

    render() {
        return (
            <ScrollView
                style={styles.container}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh}
                        colors={['#EA0000']}
                        tintColor="white"
                        title="loading..."
                        titleColor="white"
                        progressBackgroundColor="white"
                    />
                }>
                <View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginLeft: 15,
                        marginRight: 15,
                        marginTop: 5,
                        marginBottom: 5
                    }}>
                        <Icon
                            name='chevron-left'
                            size={30}
                            style={{color: 'red'}}
                        />
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon
                                name='heart'
                                size={30}
                                style={{color: 'red'}}
                            />
                            <Icon
                                name='menu'
                                size={30}
                                style={{color: 'red', marginLeft: 15}}
                            />
                        </View>
                    </View>
                    <SliderFilm/>
                    <View style={styles.cardContainer}>
                        <Image
                            source={{uri: 'http://runt-of-the-web.com/wordpress/wp-content/uploads/2014/08/frozen.jpg'}}
                            style={styles.cardImage}/>
                        <TouchableOpacity style={{position: 'absolute', left: 43, top: 65}}>
                            <Icon
                                name='play-circle-outline'
                                size={50}
                                style={{color: 'red'}}
                            />
                        </TouchableOpacity>

                        <View style={styles.cardDetails}>
                            <Text style={styles.cardTitle}>Frozen</Text>
                            <Text style={styles.cardTagline}>2007</Text>
                            <Text style={styles.cardGenreItem}>Hoạt hình - Gia Đình - Phiêu lưu</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Icon
                                    name='star'
                                    size={15}
                                    style={{color: 'yellow'}}
                                />
                                <Text style={styles.cardStarRatings}>8.9</Text>
                            </View>

                            <Text style={styles.cardRunningHours}>2h15m</Text>

                            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 3}}>
                                <Text style={{color: 'white', borderRadius: 5, borderWidth: 2, borderColor: 'red', padding: 2, textAlign: 'center'}}>HD</Text>
                                <Text style={{color: 'white', borderRadius: 5, borderWidth: 2, borderColor: 'red', padding: 2, textAlign: 'center', marginLeft: 8}}>HD</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.contentContainer}>
                        <Text
                            numberOfLines={this.state.isShowedInfo ? null : 4}
                            style={{color: 'white'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas consectetur sem.
                            Aliquam eu mauris lectus. Nullam id rutrum turpis, id viverra purus. Integer a tellus lorem.
                            Nulla tristique tincidunt eros, non consectetur elit suscipit scelerisque. Nulla dapibus
                            tortor sed ipsum sodales dictum sed et nulla. Quisque id porttitor urna. Integer mattis quam
                            id lobortis laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam
                            et sollicitudin urna. Nam sit amet sagittis ipsum. Mauris accumsan ex nec placerat dictum.
                            Fusce laoreet eros sed tortor luctus, sed laoreet elit sagittis.
                        </Text>
                        <TouchableOpacity onPress={() => this.setState({isShowedInfo: !this.state.isShowedInfo})}>
                            <Text style={{color: 'red'}}>{this.state.isShowedInfo ? 'Thu gọn' : 'Xem thêm'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{color: 'white', marginLeft: 13}}>Phim tương tự</Text>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={tl}
                    keyExtractor={(item, index) => index}
                    renderItem={({item}) => this.renderList(item)}/>
                <ListComments/>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        color: 'white',
        paddingTop: 10,
        fontSize: 12,
        fontWeight: 'bold'
    },
    underlineStyle: {
        backgroundColor: '#EA0000'
    },
    tabBar: {
        backgroundColor: '#131313'
    },
    contentContainer: {
        flex: 1,
        marginTop: 157,
        marginLeft: 13,
        marginRight: 13
    },
    progressBar: {
        backgroundColor: '#0a0a0a',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        backgroundColor: '#0a0a0a'
    },
    swiper: {
        // position: 'absolute',
        // flex: 1
    },
    linearGradient: {
        top: 0,
        left: 0,
        right: 0,
        height: 248,
        position: 'absolute'
    },
    imageBackdrop: {
        // flex: 1,
        height: 248,
        backgroundColor: 'black'
    },
    cardContainer: {
        flex: 1,
        position: 'absolute',
        top: 160,
        right: 16,
        left: 16,
        flexDirection: 'row'
    },
    cardImage: {
        height: 184,
        width: 135,
        borderRadius: 3
    },
    cardDetails: {
        paddingLeft: 10,
        flex: 1,
        paddingTop: 30
    },
    cardTitle: {
        color: 'white',
        fontSize: 19,
        fontWeight: '500',
        paddingTop: 10
    },
    cardTagline: {
        color: 'white',
        fontSize: 15
    },
    cardGenre: {
        flexDirection: 'row'
    },
    cardGenreItem: {
        textAlign: 'left',
        fontSize: 11,
        marginRight: 5,
        color: 'white'
    },
    cardNumbers: {
        flexDirection: 'row',
        marginTop: 5
    },
    cardStar: {
        flexDirection: 'row'
    },
    cardStarRatings: {
        marginLeft: 0,
        fontSize: 12,
        color: 'white'
    },
    cardRunningHours: {
        color: 'white',
        marginLeft: 0,
        fontSize: 12
    }
})