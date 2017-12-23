//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles/Rating';

// create a component
class Rating extends Component {
    state = {
        numberStars: [1, 2, 3, 4, 5],
        numberChoosed: -1,
    }

    _onPress = (index) => {
        this.setState({ numberChoosed: index });
        this.props.onPress(index);
    }

    render() {
        return (
            <View style={styles.container}>
                { this.state.numberStars.map((item, index) => {
                    if (index <= this.state.numberChoosed)
                        name = 'star';
                    else
                        name = 'star-outline'; 
                    return (<TouchableOpacity key={index}
                                onPress={ () => this._onPress(index) } >
                                <Icon
                                    name={name}
                                    size={this.props.size}
                                    color='yellow'
                                />
                            </TouchableOpacity>)
                })}
            </View>
        );
    }
}

//make this component available to the app
export default Rating;