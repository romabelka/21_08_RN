import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native'
import EventList from '../../components/event/EventList'

class EventListScreen extends Component {
    static propTypes = {

    };

    static navigationOptions = {
        title: 'Event List'
    }

    render() {
        console.log('---', this.props)
        return <EventList onEventPress = {this.handleEventPress} />
    }

    handleEventPress = (uid) => {
        console.log('---', this.props)
        this.props.navigation.navigate('event', { uid })
    }
}

const styles = StyleSheet.create({
})

export default EventListScreen