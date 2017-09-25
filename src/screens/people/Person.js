import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native'
import Person from '../../components/person/Person'

class PersonScreen extends Component {
    static propTypes = {

    };

    static navigationOptions = ({ navigation }) => ({
        title: `Person ${navigation.state.params.uid}`
    })

    render() {
        return <Person />
    }
}

const styles = StyleSheet.create({
})

export default PersonScreen