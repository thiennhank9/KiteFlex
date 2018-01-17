import React, { Component } from 'react';
import { FlatList, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import ItemComment from '../Components/ItemComment.js';
import obj from '../Objects/ObjLsComment.js';
import styles from './Styles/ListComments.js';
import { OptimizedFlatList } from 'react-native-optimized-flatlist';
import firebaseApp from '../Firebase/Config.js';

export default class ListComments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            obj: obj,
            textComment: '',
            list_comments: null
        }
    }

    componentWillMount() {
        let item = this.props.item;
        let media_type = item.media_type;
        let id = item.id_movie;

        const root_path = firebaseApp.database().ref();
        const path_to_comment = `list_comments/${media_type}/${id}`;

        root_path.once("value")
            .then(function (snapshot) {
                let list_comments = snapshot.child(path_to_comment.toString()).val();

                this.setState({
                    list_comments: list_comments
                })
            }.bind(this))
    }
    //don't ask me or confuse of this code - just working =))
    addComment(item, comment = 'blablalba') {
        const root_path = firebaseApp.database().ref();
        const media_type = item.media_type;
        const id = item.id_movie;
        const path_to_comment = `list_comments/${media_type}/${id}`;

        root_path.once("value")
            .then(function (snapshot) {
                if (snapshot.child(path_to_comment.toString()).exists()) {

                    let comments = snapshot.child(path_to_comment.toString()).val();
                    let current_length = comments.length;
                    const new_comment = {
                        key: current_length,
                        uid: store.getState().user.uid,
                        email: store.getState().user.email,
                        comment: comment
                    }
                    comments.unshift(new_comment);
                    let path = firebaseApp.database().ref(`list_comments/${media_type}/${id}`)
                    path.update(comments);

                    root_path.once("value")
                        .then(function (snapshot) {
                            let list_comments = snapshot.child(path_to_comment.toString()).val();

                            this.setState({
                                list_comments: list_comments
                            })
                        }.bind(this))
                }
                else {

                    let path = firebaseApp.database().ref(`list_comments/${media_type}/${id}`)

                    const list_comments = [
                        {
                            key: 0,
                            uid: store.getState().user.uid,
                            email: store.getState().user.email,
                            comment: comment
                        }
                    ]
                    path.update(list_comments);

                    root_path.once("value")
                        .then(function (snapshot) {
                            let list_comments = snapshot.child(path_to_comment.toString()).val();

                            this.setState({
                                list_comments: list_comments
                            })
                        }.bind(this))
                }
            }.bind(this))
        //now refresh scene to render added comment

    }

    _keyExtractor = (item, index) => index;

    renderItemComment(item) {
        return (
            <View style={{ flexDirection: 'column' }}>
                <ItemComment
                    item={item}
                //name_user={item.name_user}
                //avatar={item.avatar}
                //comment={item.comment}
                //number_like={item.number_like}
                //last_day={item.last_day}
                />
                {/* <View style={{ height: 1, backgroundColor: 'white' }}>
                </View> */}
            </View>
        )
    }

    renderFlatListOrNot() {

        if (this.state.list_comments)
            return (
                <FlatList
                    keyExtractor={this._keyExtractor}
                    style={{ marginTop: 10 }}
                    data={this.state.list_comments}
                    renderItem={({ item }) => this.renderItemComment(item)}
                />
            )
        return null;
    }
    render() {
        const item = this.props.item;
        return (
            <View style={{ backgroundColor: '#1C1C1C' }}>
                <View style={{ margin: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
                        Comments ({this.state.obj.length})
                    </Text>
                    <TextInput
                        placeholder="Comment in here..."
                        placeholderTextColor='black'
                        multiline={true}
                        onChangeText={(textComment) => this.setState({ textComment })}
                        style={styles.input}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <TouchableOpacity
                            style={styles.buttonSendComment}
                            onPress={() => this.addComment(item, this.state.textComment)}>
                            <Text style={{ margin: 4, color: 'white', fontWeight: 'bold', fontSize: 15 }}> Add comment </Text>
                        </TouchableOpacity>
                    </View>
                    {this.renderFlatListOrNot()}
                </View>
            </View>
        )
    }
}