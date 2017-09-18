import React, {Component} from 'react'
import {View, Image, StyleSheet} from 'react-native'
import SignIn from './components/auth/SignIn'
import Hello from './components/Hello'
import Event from './components/event/Event'
import EventList from './components/event/EventList'

class Root extends Component {
    render() {
        return (
            <View>
                <Image style = {styles.image}
                       source = {require('../assets/images/logo.png')}
                       resizeMode={Image.resizeMode.contain}
                />
                <EventList />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 30,
        marginTop: 15
    }
})

export default Root