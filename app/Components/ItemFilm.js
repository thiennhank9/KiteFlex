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

    renderEpisodeOrIMDb() {
        //Now show two, just in test mode
        return (
            <View style={styles.episodeContainer}>
                {/* Text box of IMDb */}
                <View style={styles.containerTextAndIcon}>
                    <Text style={{ color: 'yellow', fontWeight: 'bold' }}>
                        IMDb
                </Text>
                    <View style={styles.IMDb}>
                        <Text style={styles.textIMDb}>
                            9.5
                    </Text>
                    </View>
                </View>
                {/* Circle number of episode */}
                <View style={styles.containerTextAndIcon}>
                    <Text style={{ color: 'black', fontWeight: 'bold' }}>
                        Tập
                    </Text>
                    <View style={styles.episodeNumber}>
                        <Text style={styles.textEp}>
                            10
                    </Text>
                    </View>
                </View>
            </View>
        )
    }

    render() {
        return (
            <TouchableOpacity
                onPress={() => {
                    console.log('Pressed item film to navigate detail film')
                    //this.props.navigation.navigate('DetailFilm', { objDetailFilm: obj })
                    this.props.navigation.navigate('DetailFilm', { objDetailFilm: obj })
                }}
                activeOpacity={0.8}>
                {/* Container image and title */}
                <View style={styles.cardContainer}>
                    {/* Container image */}
                    <Image source={{ uri: 'http://runt-of-the-web.com/wordpress/wp-content/uploads/2014/08/frozen.jpg' }} style={styles.cardImage} />
                    {/* Container number of episode and IMDb - Just render 1 of them, can't render 2 at same time */}
                    {this.renderEpisodeOrIMDb()}
                    {/* Text title film with gradient */}
                    <LinearGradient
                        style={styles.cardTitleContainer}
                        colors={['rgba(0, 0, 0, 0)', 'rgba(30, 30, 30, 1)']}>
                        <Text style={styles.cardTitle} numberOfLines={2} ellipsizeMode='tail'>Frozenasjdsajkdhjsakhdksajhdksajdhsakdhsakdhksajhdkjsahdkjsahdksajhdkjsahd</Text>
                    </LinearGradient>
                </View>
            </TouchableOpacity>
        )
    }
}