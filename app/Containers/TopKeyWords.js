import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './Styles/TopKeyWords.js';

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
            data: list_top_keywords
        }
    }
    
    renderItemKeyWord(item) {
        return (
            <View
                key={item.key}
                style={styles.itemContainer}>
                <Text style={styles.text}> {item.word} </Text>
            </View>
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