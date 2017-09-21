import React, {Component} from 'react'
import {View, StyleSheet, ScrollView, SectionList, Text} from 'react-native'
import EventCard from './EventCard'
import {eventList} from '../../fixtures'

class EventList extends Component {
    static propTypes = {};

    static defaultProps = {
        events: eventList
    }

    render() {
        //const dataSource = this.props.events.map(event => <EventCard key={event.uid} event={event}/>)

        const dataSource = this.props.events.map(event => ({ data: [event], title: event.title }))
       // console.log(dataSource[0])

        return (
            <SectionList
                renderItem={({item}) => <EventCard  event={item}/>}
                renderSectionHeader={({section}) => <Text style={styles.header}>{section.title}</Text>}
                sections={dataSource}
                keyExtractor = {(item) => item.uid}
            />
        )
    }
}

const styles = StyleSheet.create({
    header: {
        fontWeight: 'bold'
    }
})

export default EventList