import React, { Component } from 'react';
import { StatusBar, View, Platform } from 'react-native';
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
} from 'react-native-indicators';
import styles from './Styles/CustomIndicators.js';

Platform.select({
    ios: () => StatusBar.setBarStyle('light-content'),
    android: () => StatusBar.setBackgroundColor('#01579B'),
})();

export default class Example extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={{ flex: 1 }}>
                        <BallIndicator color='white' animationDuration={800} />
                    </View>

                    <View style={{ flex: 1 }}>
                        <PulseIndicator color='white' />
                    </View>

                    <View style={{ flex: 1 }}>
                        <SkypeIndicator color='white' />
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={{ flex: 1 }}>
                        <WaveIndicator color='white' />
                    </View>

                    <View style={{ flex: 1 }}>
                        <WaveIndicator color='white' waveMode='outline' />
                    </View>

                    <View style={{ flex: 1 }}>
                        <WaveIndicator color='white' count={2} waveFactor={0.4} />
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={{ flex: 1 }}>
                        <UIActivityIndicator color='white' />
                    </View>

                    <View style={{ flex: 1 }}>
                        <MaterialIndicator color='white' />
                    </View>

                    <View style={{ flex: 1 }}>
                        <PacmanIndicator color='white' />
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={{ flex: 1 }}>
                        <BarIndicator color='white' count={5} />
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={{ flex: 1 }}>
                        <DotIndicator
                            count={3}
                            color='white'
                            animationDuration={800}
                        />
                    </View>

                    <View style={{ flex: 1 }}>
                        <DotIndicator
                            style={styles.reverse}
                            count={3}
                            color='white'
                            animationDuration={800}
                        />
                    </View>
                </View>
            </View>
        );
    }
}