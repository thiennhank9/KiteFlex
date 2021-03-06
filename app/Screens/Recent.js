
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import StatusBarApp from '../Components/StatusBarApp.js';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles/Movie.js';
import toUrls from '../Objects/CategoryUrl.js';
import FetchingIndicator from '../Components/FetchingIndicator.js';
import api from '../APIs/TMDb_Config.js';
import GridFilm from '../Containers/GridFilm.js';
import windows from '../Themes/Windows.js';
import { PacmanIndicator } from 'react-native-indicators';
import { connect } from 'react-redux';
//add {connect} and actionCreators
//declare state that to you want to pass to child component like a prop like below
const mapStateToProps = (state) => ({
    list_recents: state.list_recents
})
class Recent extends Component {
    static navigationOptions = {
        tabBarLabel: 'Recent',
        tabBarIcon: ({ tintColor }) => (
            <Icons
                name='clock'
                size={24}
                style={{ color: tintColor }}
            />
        )
    };

    constructor(props) {
        super(props);
        this.state = {
            //data: [],
            isLoading: false,
            page: 1
        }
    }

    componentWillMount() {
        //this.getListWatched();
        //this.getListWatchedByStore();
    }

    getListWatchedByStore(){
        let list_watched = store.getState().list_recents;

        this.setState({
            data: list_watched
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBarApp color='chocolate' />
                {this.renderGridFilmOrIndicator()}
                {this.renderFooter()}
            </View>
        )
    }

    renderHeader() {
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.header}>
                <TouchableOpacity
                    style={{ height: 50, width: 50, position: 'absolute', top: 0, left: 0, justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => this.props.navigation.goBack()}>
                    <Icons
                        name='arrow-left'
                        size={30}
                        color='chocolate'
                    />
                </TouchableOpacity>
                <Text style={styles.textCategory}> {params.category}</Text>
            </View>
        )
    }

    renderLine() {
        return (
            <View style={styles.colorline}>
            </View>
        )
    }

    getListWatched() {

        const uid = store.getState().user.uid;
        const path_to_uid = `list_watched/${uid}`;
        try {
            const root_path = firebaseApp.database().ref();
            root_path.once('value')
            .then(function(snapshot){
                if (snapshot.child(path_to_uid.toString()).exists()) {
                    let list_watched = snapshot.child(path_to_uid.toString()).val();
                    this.setState({
                        data: list_watched
                    })

                }
                else {

                }
            }.bind(this))

        }
        catch (error) {
            
        }
    }

    renderGridFilmOrIndicator() {
        const {list_recents} = this.props;
        console.log(list_recents)
        if (this.state.isLoading)
            return (
                <View style={{
                    // height: windows.height - 185, 
                    flex: 1,
                    backgroundColor: 'black', justifyContent: 'center', alignItems: 'center'
                }}>
                    <View>
                        <PacmanIndicator
                            size={50}
                            color='gold'
                        />
                        {/* <Text style={styles.textCategory}> Loading </Text> */}
                    </View>
                </View>
            )
        else
            return (
                <GridFilm
                    navigation={this.props.navigation}
                    // style={{ height: windows.height - 185 }}
                    // data={this.state.data} />
                    data={list_recents} />
            )
    }

    renderPreviousPageOrNot() {
        if (this.state.page > 1) return (
            <TouchableOpacity
                style={{ height: 30, width: 30, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                    if (this.state.page > 1) {
                        this.setState({
                            page: this.state.page - 1,
                            isLoading: true
                        })
                        this.fetchData();
                    }
                }}>
                <Icons
                    name='arrow-left'
                    size={20}
                    color='chocolate'
                />
            </TouchableOpacity>
        )
        else return (
            <View style={{ height: 30, width: 30, justifyContent: 'center', alignItems: 'center' }}>
            </View>
        )
    }
    renderFooter() {
        return (
            <View style={styles.footer}>
                {this.renderPreviousPageOrNot()}
                <Text style={styles.textCategory}> Page {this.state.page}</Text>
                <TouchableOpacity
                    style={{ height: 30, width: 30, justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => {

                        this.setState({
                            page: this.state.page + 1,
                            isLoading: true
                        })
                        this.fetchData();
                    }}>
                    <Icons
                        name='arrow-right'
                        size={20}
                        color='chocolate'
                    />
                </TouchableOpacity>
            </View>
        )
        // return (
        //     <View style={{ width: windows.width, height: 30, backgroundColor: 'pink' }}>
        //     </View>
        // )
    }
}
export default connect(mapStateToProps) (Recent)