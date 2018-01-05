import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import firebaseApp from '../Firebase/Config.js';

export default class TestFirebase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: ''
        }
    }

    click() {
        rootRef = firebaseApp.database().ref();
        let comments = [];
        rootRef.once('value')
        .then(function(snapshot) {
            let comments = snapshot.child('testfirebase/temp').val();
            console.log(comments.length);
            // comments.push({
            //     uid: 4,
            //     comment: 'asdasd4'
            // })
            // rootRef.child('testfirebase').update({
            //     temp: comments
            // })
        })
        
        // rootRef.child('testfirebase').update({
        //     temp: [
        //         {
        //             uid: '1',
        //             comment: 'lol'
        //         },
        //         {
        //             uid: '2',
        //             comment: 'ádsad'
        //         }
        //     ]
        // })
        // rootRef.once('value')
        // .then(function(snapshot) {
        //     let path = snapshot.child('testfirebase')
        //     console.log(child)
        // })
        // rootRef.child('testfirebase').update({
        //     temp: [
        //         {
        //             uid: '1',
        //             comment: 'lol'
        //         },
        //         {
        //             uid: '2',
        //             comment: 'ádsad'
        //         }
        //     ]
        // })
    }
    render() {
        return (
            <View>
                <Button
                    title='Press'
                    onPress={() => this.click()}
                />
                <Text> {this.state.info}</Text>
            </View>
        )
    }
}