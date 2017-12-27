import React, { PureComponent } from 'react';
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

export default class ItemGridFilm extends PureComponent {
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
                    <Text style={{ color: 'gold', fontWeight: 'bold', fontSize: 12 }}>
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
                    <Text style={{ color: 'darkblue', fontWeight: 'bold', fontSize: 12 }}>
                        Tập
                    </Text>
                    <View style={styles.episodeNumber}>
                        <Text style={styles.textEp}>
                            999
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    render() {
        const item = this.props.item;
        const poster = item.uri;
        const title = item.title;
        let id_movie = item.id_movie;
        return (
            <TouchableOpacity
                onPress={() => {
                    store.dispatch(actionCreators.send_id_movie(id_movie))
                    //this.props.navigation.navigate('DetailFilm', { objDetailFilm: obj })
                    this.props.navigation.navigate('DetailFilm', { objDetailFilm: obj })
                }}
                activeOpacity={0.8}>
                {/* Container image and title */}
                <View style={styles.cardContainer}>
                    {/* Container image */}
                    <Image
                        resizeMode='stretch'
                        source={{ uri: poster }}
                        style={styles.cardImage} />
                    {/* Container number of episode and IMDb - Just render 1 of them, can't render 2 at same time */}
                    {/* {this.renderEpisodeOrIMDb()} */}
                    <Text style={styles.cardTitle} numberOfLines={2} ellipsizeMode='tail'>{title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}