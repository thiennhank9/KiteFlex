import React, { Component } from 'react';
import { FlatList, View, Text, TextInput } from 'react-native';
import ItemComment from '../Components/ItemComment.js';
import obj from '../Objects/ObjLsComment.js';
import styles from './Styles/ListComments.js';
export default class ListComments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            obj: obj
        }
    }
    renderItemComment(item) {
        return (
            <ItemComment
                name_user={item.name_user}
                avatar={item.avatar}
                comment={item.comment}
                number_like={item.number_like}
                last_day={item.last_day}
            />
        )
    }
    render() {
        return (
            <View>
                <Text>
                    Nhận xét ({this.state.obj.length})
                </Text>
                <TextInput
                    placeholder="Nhập bình luận đây nè các đồng dâm"
                    style={styles.input}
                />
                <FlatList
                    //style={{ height: 100 }}
                    data={this.state.obj}
                    renderItem={({ item }) => this.renderItemComment(item)}
                />
            </View>
        )
    }
}