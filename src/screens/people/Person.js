import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Person from '../../components/people/Person'
import {inject, observer} from 'mobx-react'

@inject('people')
@observer
class PersonScreen extends Component {
    static propTypes = {

    };

    static navigationOptions = ({ navigation }) => ({
        title: `Person ${navigation.state.params.uid}`
    })

    render() {
        const {people, navigation} = this.props
        const person = people.entities[navigation.state.params.uid]
        return (
            <View>
                <Person person = {person}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
})

export default PersonScreen