import React, { Component } from 'react';
import { FlatList, View, Text, TextInput } from 'react-native';
import ItemComment from '../Components/ItemComment.js';
import obj from '../Objects/ObjLsComment.js';
import styles from './Styles/ListComments.js';
import { OptimizedFlatList } from 'react-native-optimized-flatlist'

export default class ListComments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            obj: obj
        }
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
        return (
            <View style={{ backgroundColor: '#1C1C1C' }}>
                <View style={{ margin: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
                        Comments ({this.state.obj.length})
                    </Text>
                    <TextInput
                        placeholder="Comment in here..."
                        placeholderTextColor='black'
                        style={styles.input}
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