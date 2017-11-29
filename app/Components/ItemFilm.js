import React, { PureComponent } from 'react';
import {
    TouchableOpacity,
    Image,
    Text,
    View
} from 'react-native';
import styles from './Styles/ItemFilm.js';
import res from '../Resources/index.js';

export default class ItemFilm extends PureComponent {
    constructor(props) {
        super(props);
    }

    clickToSeeDetail() {
        console.log("Clicked!")
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => this.clickToSeeDetail()}>
                <Image
                    style={styles.imageFilm}
                    source={res.images.banner}
                    resizeMode='stretch'
                />
                <Text>
                    {this.props.name}
                </Text>
            </TouchableOpacity>
        )
    }
}