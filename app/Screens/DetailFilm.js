import React, { Component } from 'react';
import { View, ScrollView, Image, TouchableOpacity, Text, StatusBar } from 'react-native';
import styles from './Styles/DetailFilm.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import obj from '../Objects/ObjDetailFilm.js';
import ListFilmByCategory from '../Containers/ListFilmByCategory.js';
import ListComments from '../Containers/ListComments.js';
import StatusBarApp from '../Components/StatusBarApp.js';

export default class DetailFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            obj: obj,
            isShowedInfo: false
        }
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#111111' }}>
                <StatusBarApp />
                <ScrollView style={{ backgroundColor: '#111111' }}>
                    {this.renderHeader()}
                    {this.renderImageFilm()}
                    {this.renderTitle()}
                    {this.renderIMDb()}
                    {this.renderNumberComment()}
                    {this.renderStar1()}
                    {this.renderDetail()}
                    {this.renderToRankStar()}
                    {this.renderListSameCategoryFilm()}
                    <ListComments />
                </ScrollView>
            </View>
        )
    }

    renderHeader() {
        return (
            <View style={styles.containerBackAndSearch}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}>
                    <Icons
                        name='ios-arrow-back'
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconSearch}>
                    <Icon
                        name='magnify'
                        size={35}
                        color='white'
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
                    color='red'
                />
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
                <Text style={styles.textNumberComment}>
                    Nhận xét ({this.state.obj.numberComments})
                </Text>
                <Icon
                    name='arrow-down'
                    size={15}
                    color='white'
                />
            </View>
        )
    }

    renderListStar(size, isShowedNumber) {
        return (
            <View style={styles.hori}>
                <Icon
                    name='star-outline'
                    size={size}
                    color='yellow'
                />
                <Icon
                    name='star-outline'
                    size={size}
                    color='yellow'
                    style={{ marginLeft: 10 }}
                />
                <Icon
                    name='star-outline'
                    size={size}
                    color='yellow'
                    style={{ marginLeft: 10 }}
                />
                <Icon
                    name='star-outline'
                    size={size}
                    color='yellow'
                    style={{ marginLeft: 10 }}
                />
                <Icon
                    name='star-outline'
                    size={size}
                    color='yellow'
                    style={{ marginLeft: 10 }}
                />
                {isShowedNumber && this.renderTextNumberMarkStar()}

            </View>
        )
    }
    renderTextNumberMarkStar() {
        return (
            <Text style={styles.textNumberMarkStar}>
                ({this.state.obj.numberMarkStar})
            </Text>
        )
    }
    //The first star
    renderStar1() {
        return (
            <View style={styles.star1Container}>
                {this.renderListStar(20, true)}
                <View style={styles.hori}>
                    <Icon
                        name='bell-off'
                        size={25}
                        color='white'
                    />
                    <Icon
                        name='bookmark-plus'
                        size={25}
                        color='white'
                        style={{ marginLeft: 10 }}
                    />
                    <Icon
                        name='download'
                        size={25}
                        color='white'
                        style={{ marginLeft: 10 }}
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
                    onPress={() => { this.setState({ isShowedInfo: true }) }}>
                    <Text style={styles.textSeeMore}>
                        Xem thêm
                    </Text>
                </TouchableOpacity>
            )

        return (
            <View style={{ marginTop: 5 }}>
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
            <View style={styles.detailContainer}>
                {/* How to make text align android */}
                <Text style={styles.textDetail}>
                    {this.state.obj.detail}
                </Text>
                {this.renderListInfo()}
            </View>
        )
    }

    renderToRankStar() {
        return (
            <View>
                <View style={{ height: 1, backgroundColor: 'grey', margin: 10 }}>
                </View>
                <View style={styles.rankStartContainer}>

                    <Text style={styles.textNumberComment}>
                        Xếp hạng phim này
                </Text>
                    {this.renderListStar(30, false)}
                </View>
            </View>
        )
    }

    renderListSameCategoryFilm() {
        return (
            <View style={{ flexDirection: 'column' }}>
                <View style={{ height: 1, backgroundColor: 'grey', margin: 10 }}>
                </View>
                <Text style={styles.titleCategory}>
                    Phim tương tự
                </Text>
                <ListFilmByCategory />
                <View style={{ height: 1, backgroundColor: 'grey', margin: 10 }}>
                </View>
            </View>
        )
    }
}
