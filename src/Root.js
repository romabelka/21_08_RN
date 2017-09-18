import React, {Component} from 'react'
import {View, Text} from 'react-native'
import SignIn from './components/auth/SignIn'
import Hello from './components/Hello'
import Event from './components/event/Event'

class Root extends Component {
    render() {
        return (
            <View>
                <Event />
            </View>
        )
    }
}

export default Root