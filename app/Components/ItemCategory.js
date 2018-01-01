import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native';
import styles from './Styles/ItemCategory.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ItemCategory extends Component {
    
    clickToFindFilms(id_genre = 28, name_genre = 'Action') {
        const root_navigation = store.getState().root_navigation;
        root_navigation.navigate('ListSameCategory', {id_genre: id_genre, name_genre: name_genre})
    }

    render() {
        const item = this.props.item;

        const name = item.name;
        const key = item.key;
        const id_genre = item.id;
        const icon_name = item.icon_name;
        
        return (
            <TouchableHighlight
                key={key}
                underlayColor={'rgba(150, 160, 200, 0.2)'}
                onPress={() => this.clickToFindFilms(id_genre, name)}>
                <View style={styles.container}>
                    <Icon
                        name={icon_name}
                        size={30}
                        style={styles.item}
                    />
                    <Text style={styles.text}>
                        {name}
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }
}