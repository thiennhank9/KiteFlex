import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Styles/TopKeyWords.js';
import genre from '../Objects/GenresFromAPI.js';

const list_top_keywords = [{ key: 1, word: 'shit' }, { key: 2, word: 'shita' }, { key: 3, word: 'shit 3' },
{ key: 11, word: 'shit' }, { key: 21, word: 'shita' }, { key: 31, word: 'shit 3' },
{ key: 12, word: 'shit' }, { key: 22, word: 'shita' }, { key: 32, word: 'shit 3' },
{ key: 13, word: 'shit' }, { key: 23, word: 'shita' }, { key: 33, word: 'shit 3' },
{ key: 14, word: 'shit' }, { key: 24, word: 'shita' }, { key: 34, word: 'shit 3' },
]
export default class TopKeyWords extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: genre
        }
    }

    clickToFindFilms(id_genre = 28, name_genre = 'Action') {
        const root_navigation = store.getState().root_navigation;
        root_navigation.navigate('ListSameCategory', {id_genre: id_genre, name_genre: name_genre})
    }

    renderItemKeyWord(item) {
        const name = item.name;
        const id = item.id;
        const key = item.key;
        return (
            <TouchableOpacity
                onPress={() => this.clickToFindFilms(id, name)}
                key={key}
                style={styles.itemContainer}>
                <Text style={styles.text}> #{name} </Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View>
                <Text style={styles.titleCategory}> Top Keywords </Text>
                    <View style={styles.container}>
                        {this.state.data.map((item) => 
                            this.renderItemKeyWord(item)
                        )}             
                    </View>
            </View>
        )
    }
}