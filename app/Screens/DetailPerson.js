import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import SearchFilm from '../Components/SearchFilm.js';
import styles from './Styles/DetailPerson.js';
import ListOthersPerson from '../Containers/ListOthersPerson';
import { ListComments } from '../Containers/index';
import api from '../APIs/TMDb_Config';
import actionsCreators from '../Redux/ActionsCreator';

export default class DetailPerson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                profile_path: '',
                name: '',
                birthday: '',
                place_of_birth: '',
                gender: '',
                homepage: '',
                biography: '',
                list_movies: []
            },
            list_others: [],
            is_showed_full_bioraphy: false
        }
    }

    componentDidMount() {
        this.fetchData();
        this.fetchOthers();
    }

    fetchOthers() {
        return fetch(api.get_popular_people)
            .then((response) => response.json())
            .then((responseJson) => {
                let results = responseJson.results;
                let limit_render = 7;
                if (results.length < 7)
                    limit_render = results.length;
                let list_others = [];
                for (let i = 0; i < limit_render; i++) {
                    let item = results[i];
                    objPerson = {
                        key: i,
                        id: item.id,
                        name: item.name,
                        profile_path: api.get_profile_path(item.profile_path)
                    }
                    list_others.push(objPerson)
                }
                this.setState({
                    list_others: list_others
                })
            })
            .catch((error) => {
                console.error(error)
            })
    }
    fetchData() {
        const person_id = this.props.navigation.state.params.id_person;

        return fetch(api.get_detail_person(person_id))
            .then((reponse) => reponse.json())
            .then((responseJson) => {
                const dataJson = responseJson;
                let gender = 'male'
                if (dataJson.gender.toString() == '1')
                    gender = 'female'
                //set limit item movie cast to render only 7 items
                let limit_item_film = 7;
                //check if the results from json has size is smaller than 7
                let casts = dataJson.movie_credits.cast;
                if (casts.length < 7)
                    limit_item_film = casts.length;

                let list_movies = [];
                //add item to list movies
                for (let i = 0; i < limit_item_film; i++) {
                    let cast = casts[i];
                    obj_movie = {
                        key: i,
                        id: cast.id,
                        poster_path: api.url_get_poster(cast.poster_path),
                        name: cast.title,
                    }
                    list_movies.push(obj_movie);
                }

                //set state data
                this.setState({
                    data: {
                        profile_path: api.get_profile_path(dataJson.profile_path),
                        name: dataJson.name,
                        birthday: dataJson.birthday,
                        place_of_birth: dataJson.place_of_birth,
                        gender: gender,
                        homepage: dataJson.homepage,
                        biography: dataJson.biography,
                        list_movies: list_movies
                    }
                })
            })
            .catch((error) => {
                console.error(error)
            })
    }
    renderInfoItem(category, info) {
        return (
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.text_category}> {category}: </Text>
                <Text style={styles.text_info} numberOfLines={2}> {info}</Text>
            </View>
        )

    }

    renderHeader() {
        return (
            <View style={styles.header}>
                <Image
                    source={{ uri: this.state.data.profile_path }}
                    style={styles.image}
                />
                <View style={{ flexDirection: 'column' }}>
                    {this.renderInfoItem('Full Name', this.state.data.name)}
                    {this.renderInfoItem('Date Of Birth', this.state.data.birthday)}
                    {this.renderInfoItem('Place of Birth', this.state.data.place_of_birth)}
                    {this.renderInfoItem('Gender', this.state.data.gender)}
                    {this.renderInfoItem('Homepage', this.state.data.homepage)}
                </View>
            </View>
        )
    }

    renderBiography() {
        if (this.state.is_showed_full_bioraphy) {
            return (
                <View>
                    <Text style={styles.text_title_biography}> Biography</Text>
                    <Text style={styles.text_info_biography}>
                        {this.state.data.biography}
                    </Text>
                    <TouchableOpacity onPress={() => this.setState({is_showed_full_bioraphy: false})}>
                        <Text style={{color: 'red', fontSize: 13, margin: 5, borderRadius: 5}}>
                            Less
                        </Text>
                    </TouchableOpacity>
                </View>
            )
        }

        return (
            <View>
                <Text style={styles.text_title_biography}> Biography</Text>
                <Text numberOfLines={6} ellipsizeMode='tail' style={styles.text_info_biography}>
                    {this.state.data.biography}
                </Text>
                <TouchableOpacity onPress={() => this.setState({is_showed_full_bioraphy: true})}>
                    <Text style={{color: 'red', fontSize: 13, margin: 5, borderRadius: 5}}>
                        More 
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    renderItem(item) {
        let name = item.name;
        let key = item.key;
        let id = item.id;
        let poster_path = item.poster_path;

        return (
            <TouchableOpacity
                key={key}
                onPress={() => {
                    store.dispatch(actionsCreators.send_id_movie(id));
                    let root_navigation = store.getState().root_navigation;
                    root_navigation.navigate('DetailFilm');
                }}
                style={styles.item_movie_container}>
                <Image
                    source={{ uri: poster_path }}
                    style={{ margin: 2, height: 160, backgroundColor: 'pink' }}>
                </Image>
                <Text numberOfLines={2} ellipsizeMode='tail' style={styles.item_title}>
                    {name}
                </Text>
            </TouchableOpacity>
        )
    }

    renderListMoviesOfPerson() {
        return (
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ margin: 5 }}> Movie casted </Text>
                    <TouchableOpacity style={{ margin: 5, backgroundColor: 'red' }}>
                        <Text style={{ margin: 3 }}>
                            More
                        </Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    horizontal
                    data={this.state.data.list_movies}
                    renderItem={({ item }) => this.renderItem(item)}
                />
                {/* <ListFilmByCategory /> */}
            </View>
        )
    }

    renderItemPerson(item) {
        let name = item.name;
        let key = item.key;
        let id = item.id;
        let profile_path = item.profile_path;
        return (
            <TouchableOpacity
                key={key}
                onPress={() => {
                    let root_navigation = store.getState().root_navigation;
                    root_navigation.navigate('DetailPerson', { id_person: id });
                }}
                style={styles.item_movie_container}>
                <Image
                    source={{ uri: profile_path }}
                    style={{ margin: 2, height: 160, backgroundColor: 'pink' }}>
                </Image>
                <Text numberOfLines={2} ellipsizeMode='tail' style={styles.item_title}>
                    {name}
                </Text>
            </TouchableOpacity>
        )
    }
    renderOthers() { //other person   
        return (
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ margin: 5 }}> Others </Text>
                    <TouchableOpacity style={{ margin: 5, backgroundColor: 'red' }}>
                        <Text style={{ margin: 3 }}>
                            More
                        </Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    horizontal
                    data={this.state.list_others}
                    renderItem={({ item }) => this.renderItemPerson(item)}
                />
                {/* <ListFilmByCategory /> */}
            </View>
        )
    }
    renderComments(item) {
        return (
            <ListComments item={item}/>
        )
    }
    render() {
        const item = this.props.navigation.state.params.objDetail;
        return (
            <View style={styles.container}>
                <SearchFilm icon='back' navigation={this.props.navigation} />
                <ScrollView>
                    {this.renderHeader()}
                    {this.renderBiography()}
                    {this.renderListMoviesOfPerson()}
                    {this.renderOthers()}
                    {this.renderComments(item)}
                </ScrollView>
            </View>
        )
    }
}