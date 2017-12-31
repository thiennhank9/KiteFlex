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
    //Now don't use this function

    // renderEpisodeOrIMDb() {
    //     //Now show two, just in test mode
    //     return (
    //         <View style={styles.episodeContainer}>
    //             {/* Text box of IMDb */}
    //             <View style={styles.containerTextAndIcon}>
    //                 <Text style={{ color: 'gold', fontWeight: 'bold', fontSize: 12 }}>
    //                     IMDb
    //                 </Text>
    //                 <View style={styles.IMDb}>
    //                     <Text style={styles.textIMDb}>
    //                         9.5
    //                     </Text>
    //                 </View>
    //             </View>
    //             {/* Circle number of episode */}
    //             <View style={styles.containerTextAndIcon}>
    //                 <Text style={{ color: 'darkblue', fontWeight: 'bold', fontSize: 12 }}>
    //                     Tập
    //                 </Text>
    //                 <View style={styles.episodeNumber}>
    //                     <Text style={styles.textEp}>
    //                         999
    //                     </Text>
    //                 </View>
    //             </View>
    //         </View>
    //     )
    // }

    renderImageOrNull(poster) {
        let four_last_characters = poster.toString().substr(poster.length - 4);
        //check four last character whether is null or not to render announcement or image
        if (four_last_characters != 'null')
            return (
                <Image
                    resizeMode='stretch'
                    source={{ uri: poster }}
                    style={styles.cardImage} />
            )
        else
            return (
                <View style={[{ justifyContent: 'center', alignItems: 'center' }, styles.cardImage]}>
                    <Text> Haven't updated poster </Text>
                </View>
            )
    }
    render() {
        const item = this.props.item;
        const poster = item.uri;
        const title = item.title;
        let id_movie = item.id_movie;
        const media_type = item.media_type;
        // if (media_type == 'person')
        //     console.log(media_type + " name " + title)
        return (
            <TouchableOpacity
                onPress={() => {
                    store.dispatch(actionCreators.send_id_movie(id_movie))
                    const root_navigation = store.getState().root_navigation;
                    root_navigation.navigate('DetailFilm', { objDetailFilm: obj })
                    //this.props.navigation.navigate('DetailFilm', { objDetailFilm: obj })
                }}
                activeOpacity={0.8}>
                {/* Container image and title */}
                <View style={styles.cardContainer}>
                    {/* Container image */}
                    {this.renderImageOrNull(poster)}
                    {/* Container number of episode and IMDb - Just render 1 of them, can't render 2 at same time */}
                    {/* {this.renderEpisodeOrIMDb()} */}
                    <Text style={styles.cardTitle} numberOfLines={2} ellipsizeMode='tail'>{title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    componentDidMount() {

    }
}