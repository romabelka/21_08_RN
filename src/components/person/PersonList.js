import React, {Component} from 'react'
import {Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import PersonCard from './PersonCard'

class PersonList extends Component {
    static propTypes = {};

    render() {
        const {onPersonPress, people} = this.props
        return <FlatList
            data={people}
            renderItem={({item}) => <TouchableOpacity onPress={onPersonPress.bind(null, item.uid)}>
                    <PersonCard person={item}/>
                </TouchableOpacity>
            }
        />


    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#F0F0F0',
        height: 40,
        lineHeight: 40,
        marginBottom: 5,
        shadowOffset: {
            height: 2, width: 0
        },
        shadowOpacity: 0.3,
        elevation: 3
    }
})

export default PersonList