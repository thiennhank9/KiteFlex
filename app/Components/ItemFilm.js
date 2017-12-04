import React, { Component } from 'react'
import {
    TouchableOpacity,
    Image,
    Text,
    View
} from 'react-native'
import styles from './Styles/ItemFilm.js'
import res from '../Resources/index.js'
import LinearGradient from 'react-native-linear-gradient'
import obj from '../Objects/ObjDetailFilm.js';

export default class ItemFilm extends Component {
    constructor(props) {
        super(props);
    }

    clickToSeeDetail() {
        console.log("Clicked!")
    }

    render() {
        return (
            <TouchableOpacity
                onPress={() => {
                    console.log('Pressed item film to navigate detail film')
                    this.props.navigation.navigate('DetailFilm', { objDetailFilm: obj })
                }
                }
                activeOpacity={0.8}>
                <View style={styles.cardContainer}>
                    <Image source={{ uri: 'http://runt-of-the-web.com/wordpress/wp-content/uploads/2014/08/frozen.jpg' }} style={styles.cardImage} />

                    <LinearGradient
                        style={styles.cardTitleContainer}
                        colors={['rgba(0, 0, 0, 0)', 'rgba(30, 30, 30, 1)']}>
                        <Text style={styles.cardTitle} numberOfLines={2}>Frozen</Text>
                    </LinearGradient>
                </View>
            </TouchableOpacity>
        )
    }
}