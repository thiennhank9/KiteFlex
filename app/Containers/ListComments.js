import React, { Component } from 'react';
import { FlatList, View, Text, TextInput, Button } from 'react-native';
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
            textComment: ''
        }
    }

    addComment(item, comment = 'blablalba') {
        const root_path = firebaseApp.database().ref();
        root_path.once("value")
            .then(function (snapshot) {
                const media_type = item.media_type;
                const id = item.id_movie;
                const path_to_comment = `list_comments/${media_type}/${id}`
                if (snapshot.child(path_to_comment.toString()).exists()) {
                    console.log('updated')
                    let comments = snapshot.child(path_to_comment.toString()).val();
                    let current_length = comments.length;
                    const new_comment = {
                        key: current_length,
                        uid: store.getState().user.uid,
                        comment: comment
                    }
                    comments.push(new_comment);
                    let path = firebaseApp.database().ref(`list_comments/${media_type}/${id}`)
                    path.update(comments);
                    console.log('updated')
                }
                    
                else {
                    console.log('none');
                    let path = firebaseApp.database().ref(`list_comments/${media_type}/${id}`)
                    const list_comments = [
                        {
                            key: 0,
                            uid: store.getState().user.uid,
                            comment: comment
                        }
                    ]
                    path.update(list_comments);
                    console.log('updated')
                }
            })
    }

    _keyExtractor = (item, index) => index;

    renderItemComment(item) {
        return (
            <View style={{ flexDirection: 'column' }}>
                <ItemComment
                    name_user={item.name_user}
                    avatar={item.avatar}
                    comment={item.comment}
                    number_like={item.number_like}
                    last_day={item.last_day}
                />
                {/* <View style={{ height: 1, backgroundColor: 'white' }}>
                </View> */}
            </View>
        )
    }

    render() {
        const item = this.props.item;
        console.log(item);
        return (
            <View style={{ backgroundColor: '#1C1C1C' }}>
                <View style={{ margin: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
                        Comments ({this.state.obj.length})
                    </Text>
                    <TextInput
                        placeholder="Comment in here..."
                        placeholderTextColor='black'
                        onChangeText={(textComment) => this.setState({textComment})}
                        style={styles.input}
                    />
                    <Button
                        title='Add comment'
                        onPress={() => this.addComment(item, this.state.textComment)}
                    />
                    <FlatList
                        keyExtractor={this._keyExtractor}
                        style={{ marginTop: 10 }}
                        data={this.state.obj}
                        renderItem={({ item }) => this.renderItemComment(item)}
                    />
                </View>
            </View>
        )
    }
}