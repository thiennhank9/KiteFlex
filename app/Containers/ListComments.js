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
            <View style={{ backgroundColor: 'slategray' }}>
                <View style={{ margin: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
                        Nhận xét ({this.state.obj.length})
                    </Text>
                    <TextInput
                        placeholder="Nhập bình luận đây nè các đồng dâm"
                        placeholderTextColor='black'
                        style={styles.input}
                        underlineColorAndroid='rgba(0,0,0,0)'
                    />
                    <FlatList
                        style={{ marginTop: 10 }}
                        data={this.state.obj}
                        renderItem={({ item }) => this.renderItemComment(item)}
                    />
                </View>
            </View>
        )
    }
}