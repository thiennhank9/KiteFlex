import React, { Component } from 'react';
import {
    Image,
    Text,
    View,
    ScrollView,
    StyleSheet,
    Animated,
    PanResponder,
    TouchableHighlight,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import styles from './Styles/ImageSlider.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import actionCreators from '../Redux/ActionsCreator.js';

const reactNativePackage = require('react-native/package.json');
const splitVersion = reactNativePackage.version.split('.');
const majorVersion = +splitVersion[0];
const minorVersion = +splitVersion[1];

//Aspect ratio
const image_aspect_ratio = 281 / 500;

export default class ImageSlider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: 0,
            height: Dimensions.get('window').width * (281 / 500), //Aspect ratio of a image with width: 500, height: 281
            width: Dimensions.get('window').width,
            scrolling: false,
        };
    }

    _onRef(ref) {
        this._ref = ref;
        if (ref && this.state.position !== this._getPosition()) {
            this._move(this._getPosition());
        }
    }

    _move(index) {
        const isUpdating = index !== this._getPosition();
        const x = this.state.width * index;
        if (majorVersion === 0 && minorVersion <= 19) {
            this._ref.scrollTo(0, x, true); // use old syntax
        } else {
            this._ref.scrollTo({ x: this.state.width * index, y: 0, animated: true });
        }
        this.setState({ position: index });
        if (isUpdating && this.props.onPositionChanged) {
            this.props.onPositionChanged(index);
        }
    }

    _getPosition() {
        if (typeof this.props.position === 'number') {
            return this.props.position;
        }
        return this.state.position;
    }

    componentDidUpdate(prevProps) {
        if (prevProps.position !== this.props.position) {
            this._move(this.props.position);
        }
    }

    componentWillMount() {
        const width = this.state.width;

        let release = (e, gestureState) => {
            const width = this.state.width;
            const relativeDistance = gestureState.dx / width;
            const vx = gestureState.vx;
            let change = 0;

            if (relativeDistance < -0.5 || (relativeDistance < 0 && vx <= 0.5)) {
                change = 1;
            } else if (relativeDistance > 0.5 || (relativeDistance > 0 && vx >= 0.5)) {
                change = -1;
            }
            const position = this._getPosition();
            if (position === 0 && change === -1) {
                change = 0;
            } else if (position + change >= this.props.images.length) {
                change = (this.props.images.length) - (position + change);
            }
            this._move(position + change);
            return true;
        };

        this._panResponder = PanResponder.create({
            onPanResponderRelease: release
        });

        this._interval = setInterval(() => {
            const newWidth = Dimensions.get('window').width;
            if (newWidth !== this.state.width) {
                this.setState({ width: newWidth });
            }
        }, 16);
    }

    componentWillUnmount() {
        clearInterval(this._interval);
    }

    //juts for test but not working =))
    renderItemImage() {
        return (
            <View>
                <Image
                    key={index}
                    source={imageObject}
                    style={{ height, width }}
                />
            </View>
        )
    }

    render() {
        const width = this.state.width;
        const height = this.props.height || this.state.height;
        const position = this._getPosition();
        return (<View>
            <ScrollView
                ref={ref => this._onRef(ref)}
                decelerationRate={0.99}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                {...this._panResponder.panHandlers}
                style={[styles.container, this.props.style, { height: height }]}>
                {this.props.images.map((image, index) => {
                    const imageObject = typeof image === 'string' ? { uri: image.uri } : image;

                    let id_movie = image.id_movie; //navigate to DetailFilm with id_movie
                    let uri = image.uri_poster;
                    let title = image.title;
                    const imageComponent =
                        //This is the component render each item IMAGE
                        <TouchableOpacity
                            onPress={() => {
                                store.dispatch(actionCreators.send_id_movie(id_movie))
                                let item = {
                                    id_movie: id_movie,
                                    media_type: 'movie',
                                    uri: uri,
                                    title: title
                                }
                                this.props.navigation.navigate('DetailFilm', {objDetail: item})
                            }
                            }
                            style={{ flexDirection: 'column' }}
                            key={image.key}>
                            <Image
                                key={image.key}
                                source={imageObject}
                                style={{ height, width }}
                            />
                            <View style={styles.titleContainer}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={styles.containerIcon}>
                                        <Icon
                                            name='star'
                                            size={20}
                                            color='red'
                                        />
                                    </View>
                                    <View style={styles.containerMarkNumber}>
                                        <Text style={styles.numberVote}>
                                            {image.vote_average}
                                        </Text>
                                    </View>
                                </View>
                                <Text style={styles.textTitle}> {image.title} </Text>
                                <Text
                                    style={styles.textOverview}
                                    numberOfLines={2}
                                    ellipsizeMode='tail'>
                                    {image.overview}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    if (this.props.onPress) {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={{ height, width }}
                                onPress={() => this.props.onPress({ image, index })}
                                delayPressIn={200}
                            >
                                {imageComponent}
                            </TouchableOpacity>
                        );
                    } else {
                        return imageComponent;
                    }
                })}
            </ScrollView>
            <View style={styles.buttons}>
                {this.props.images.map((image, index) => {
                    return (<TouchableHighlight
                        key={index}
                        underlayColor="#ccc"
                        onPress={() => {
                            return this._move(index);
                        }}
                        style={[styles.button, position === index && styles.buttonSelected]}>
                        <View></View>
                    </TouchableHighlight>);
                })}
            </View>
        </View>);
    }
}
