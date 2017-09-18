import React, { Component } from 'react'
import {View, StyleSheet, Image, Text} from 'react-native'
import Card from '../common/Card'

class EventCard extends Component {
    static propTypes = {

    };

    render() {
        return (
            <Card style = {styles.container}>
                <Image
                    source={{uri: 'http://lorempixel.com/100/50/technics'}}
                    style={styles.image}
                />
                <View style = {styles.description}>
                    <Text>{this.props.event.title}</Text>
                    <Text>{this.props.event.url}</Text>
                </View>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 50
    },
    container: {
        flexDirection: 'row',
    },
    description: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
})

export default EventCard