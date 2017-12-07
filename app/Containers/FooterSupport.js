import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList
} from 'react-native';
import styles from './Styles/FooterSupport.js';
import { ButtonSupport } from '../Components/index.js';
import lsButtonSuport from '../Objects/ListButtonSupport.js';

export default class FooterSupport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lsButtonSuport: lsButtonSuport
        }
    }

    renderItemButtonSupport(item) {
        return (
            <ButtonSupport
                text_name={item.text_name}
                icon_name={item.icon_name} 
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerButtonSupport}>
                    {this.renderItemButtonSupport(lsButtonSuport[0])}
                    {this.renderItemButtonSupport(lsButtonSuport[1])}
                    {this.renderItemButtonSupport(lsButtonSuport[2])}
                </View>
                <Text style={styles.textGrey}>
                    - Hỗ trợ và góp ý -
                </Text>
            </View>
        )
    }
}