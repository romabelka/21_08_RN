import React, { Component } from 'react'
import {observer, inject} from 'mobx-react'
import {View, StyleSheet, ActivityIndicator} from 'react-native'
import PeopleList from '../../components/people/PeopleList'
import {text, email} from 'react-native-communications'

@inject('people')
@observer
class PeopleListScreen extends Component {
    static propTypes = {

    };

    static navigationOptions = {
        title: 'People List'
    }

    componentDidMount() {
        const {people} = this.props
        if (!people.loaded && !people.loading) people.loadAll()
    }

    render() {
        const {people} = this.props
        if (people.loading) return this.getLoader()
        return <PeopleList onPersonPress = {this.handlePress}/>
    }

    getLoader() {
        return <View><ActivityIndicator size='large'/></View>
    }

    handlePress = uid => {
//        email(this.props.people.entities[uid].email)
        text('+123456789', 'event notification')
    }
}

const styles = StyleSheet.create({
})

export default PeopleListScreen