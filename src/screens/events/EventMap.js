import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native'
import {MapView} from 'expo'

class EventMapScreen extends Component {
    static propTypes = {

    };
    static navigationOptions = {
        title: 'map'
    }

    render() {
        return (
            <MapView
                style = {styles.map}
            />
        )
    }
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
})

export default EventMapScreen