import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Event from '../../components/event/Event'
import {inject, observer} from 'mobx-react'

@inject('events')
@observer
class EventScreen extends Component {
    static propTypes = {

    };

    static navigationOptions = ({ navigation }) => ({
        title: `Event ${navigation.state.params.uid}`
    })

    render() {
        const {events, navigation} = this.props
        const event = events.entities[navigation.state.params.uid]
        return (
            <View>
                <Text>Month: {event.month}</Text>
                <Event event = {event}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
})

export default EventScreen