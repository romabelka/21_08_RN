import React, {Component} from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity, Button} from 'react-native'
import {observer, inject} from 'mobx-react'
import Avatar from './Avatar'
import firebase from 'firebase'

@inject('navigation')
@observer
class Person extends Component {

    state = {
        avatarURI: 'http://lorempixel.com/200/100/people/'
    }

    getAvatarURI = async () => {
        const {person} = this.props
        const fileExt = 'jpg'
        const storage = firebase.storage().ref(`Avatars/${person.uid}.${fileExt}`)
        try {
            const uri = await storage.getDownloadURL()

            this.setState({
                avatarURI: uri
            })
        } catch (e) {
            console.log(e)
        }
    }
    componentDidMount() {
        this.getAvatarURI()
    }
    render() {
        const {person} = this.props
        return (
            <View style={styles.container}>
                <Text style={[styles.text, styles.header]}>Email: {person.email}</Text>
                <Avatar personUid={person.uid}/>
                <View>
                    <Image
                        source={{uri: this.state.avatarURI}}
                        style={styles.image}
                    />
                    <Text>Name {person.firstName}</Text>
                    <Text>Last Name {person.lastName}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        height: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    header: {
        backgroundColor: '#F2F2F2',
        shadowColor: '#000',
        shadowOpacity: 0.8,
        shadowOffset: {
            height: 2,
            width: 0
        },
        elevation: 5
    },
    text: {
        width: '100%',
        height: 30,
        marginBottom: 20,
        textAlign: 'center'
    },
    image: {
        width: 200,
        height: 100
    }
})

export default Person