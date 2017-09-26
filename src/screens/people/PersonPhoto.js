import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native'
import PersonPhoto from '../../components/people/PersonPhoto'

class PersonPhotoScreen extends Component {
    static propTypes = {

    };

    render() {
        return <PersonPhoto uid = {this.props.navigation.state.params.uid} />
    }

}

const styles = StyleSheet.create({
})

export default PersonPhotoScreen