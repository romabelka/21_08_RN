import React, { Component } from 'react'
import {observer, inject} from 'mobx-react'
import {View, StyleSheet, ActivityIndicator} from 'react-native'
import PersonList from '../../components/person/PersonList'

@inject('people')
@observer
class PersonListScreen extends Component {
    static propTypes = {

    };

    static navigationOptions = {
        title: 'Person List'
    }

    componentDidMount() {
        this.props.people.loadAll()
    }

    render() {
        const {people} = this.props
        if (people.loading) return this.getLoader()
        return <PersonList onPersonPress = {this.handlePersonPress} people = {people.list}/>
    }

    getLoader() {
        return <View><ActivityIndicator size='large'/></View>
    }

    handlePersonPress = (uid) => {
        console.log('---', this.props)
        this.props.navigation.navigate('person', { uid })
    }
}

const styles = StyleSheet.create({
})

export default PersonListScreen