import React, { PureComponent } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native';
import styles from './Styles/ItemCategory.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ItemCategory extends PureComponent {

    clickToFindFilms() {
        console.log('Clicked Item Category!')
    }
    render() {
        return (
            <TouchableHighlight
                underlayColor={'rgba(150, 160, 200, 0.2)'}
                onPress={() => this.clickToFindFilms()}>
                <View style={styles.container}>
                    <Icon
                        name={this.props.icon}
                        size={30}
                        style={styles.item}
                    />
                    <Text style={styles.text}>
                        {this.props.name}
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }
}