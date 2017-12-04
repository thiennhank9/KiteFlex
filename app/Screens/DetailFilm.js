import React, { Component } from 'react';
import { View, ScrollView, Image, TouchableOpacity, Text, Vibration } from 'react-native';
import styles from './Styles/DetailFilm.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import obj from '../Objects/ObjDetailFilm.js';
import ListFilmByCategory from '../Containers/ListFilmByCategory.js';

export default class DetailFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            obj: obj,
            isShowedInfo: false
        }
    }
    renderHeader() {
        return (
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('TabApp')}>
                    <Icon
                        name='keyboard-backspace'
                        size={30}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon
                        name='magnify'
                        size={30}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    renderImageFilm() {
        return (
            <View style={styles.imageFilmContainer}>
                <Icon
                    name='play-circle-outline'
                    size={60}
                />
                {/* <Image
                    source={{ uri: 'http://runt-of-the-web.com/wordpress/wp-content/uploads/2014/08/frozen.jpg' }}
                    style={styles.imageFilm}
                    //resizeMode='stretch'
                /> */}
            </View>
        )
    }

    renderTitle() {
        return (
            <Text
                style={styles.textTitle}
                numberOfLines={3}
                ellipsizeMode='tail'
            >
                {this.state.obj.title}
            </Text>
        )
    }

    renderIMDb() {
        return (
            <View style={styles.IMDbContainer}>
                <View style={styles.hori}>
                    <Text style={styles.textIMDb}>
                        IMDb
                    </Text>
                    <Text style={styles.textMark}>
                        {this.state.obj.IMDb}/10 (0)
                    </Text>
                </View>
                <View style={styles.hori}>
                    <Text style={styles.textHD}>
                        HD
                    </Text>
                    <Text style={styles.textVN}>
                        VN
                    </Text>
                </View>
            </View>
        )
    }

    renderNumberComment() {
        return (
            <View style={styles.hori}>
                <Text>
                    Nhận xét ({this.state.obj.numberComments})
                </Text>
                <Icon
                    name='arrow-down'
                    size={20}
                />
            </View>
        )
    }

    renderListStar() {
        return (
            <View style={styles.hori}>
                <Icon
                    name='star-outline'
                    size={15}
                />
                <Icon
                    name='star-outline'
                    size={15}
                />
                <Icon
                    name='star-outline'
                    size={15}
                />
                <Icon
                    name='star-outline'
                    size={15}
                />
                <Icon
                    name='star-outline'
                    size={15}
                />
            </View>
        )
    }
    //The first star
    renderStar1() {
        return (
            <View style={styles.IMDbContainer}>
                <View style={styles.hori}>
                    <Icon
                        name='star-outline'
                        size={15}
                    />
                    <Icon
                        name='star-outline'
                        size={15}
                    />
                    <Icon
                        name='star-outline'
                        size={15}
                    />
                    <Icon
                        name='star-outline'
                        size={15}
                    />
                    <Icon
                        name='star-outline'
                        size={15}
                    />
                    <Text style={styles.numberMarkStar}>
                        ({this.state.obj.numberMarkStar})
                    </Text>
                </View>
                <View style={styles.hori}>
                    <Icon
                        name='bell-off'
                        size={20}
                    />
                    <Icon
                        name='bookmark-plus'
                        size={20}
                    />
                    <Icon
                        name='download'
                        size={20}
                    />
                </View>
            </View>
        )
    }

    renderInfo(major, info) {
        return (
            <View style={styles.hori}>
                <Text style={styles.textMajor}>
                    {major}
                </Text>
                <Text style={styles.textInfo}>
                    {info}
                </Text>
            </View>
        )
    }

    renderListInfo() {
        if (!this.state.isShowedInfo)
            return (
                <TouchableOpacity
                    onPress={() => this.setState({
                        isShowedInfo: true
                    })}>
                    <Text style={styles.textSeeMore}>
                        Xem thêm
                    </Text>
                </TouchableOpacity>
            )

        return (
            <View>
                {this.renderInfo('Đạo diễn :', this.state.obj.directors)}
                {this.renderInfo('Kịch bản :', this.state.obj.directors)}
                {this.renderInfo('Ngày phát hành :', this.state.obj.directors)}
                {this.renderInfo('Thời lượng :', this.state.obj.directors)}
                {this.renderInfo('Nước sản xuất :', this.state.obj.directors)}
                {this.renderInfo('Ngôn ngữ :', this.state.obj.directors)}
                {this.renderInfo('Diễn viên :', this.state.obj.directors)}
            </View>
        )
    }

    renderDetail() {
        return (
            <View>
                <Text>
                    {this.state.obj.detail}
                </Text>
                {this.renderListInfo()}
            </View>
        )
    }

    renderToRankStar() {
        return (
            <View style={styles.rankStartContainer}>
                <Text>
                    Xếp hạng phim này
                </Text>
                {this.renderListStar()}
            </View>
        )
    }

    renderListSameCategoryFilm() {
        return (
            <View>
                <Text>
                    Phim tương tự
                    </Text>
                <ListFilmByCategory />
            </View>
        )
    }
    
    render() {
        return (
            <ScrollView style={styles.container}>
                {this.renderHeader()}
                {this.renderImageFilm()}
                {this.renderTitle()}
                {this.renderIMDb()}
                {this.renderNumberComment()}
                {this.renderStar1()}
                {this.renderDetail()}
                {this.renderToRankStar()}
                {this.renderListSameCategoryFilm()}
            </ScrollView>
        )
    }
}
