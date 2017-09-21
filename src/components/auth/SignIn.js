import React, { Component } from 'react'
import {observer} from 'mobx-react'
import firebase from 'firebase'
import {View, Text, TextInput, TouchableOpacity, Platform} from 'react-native'
import userStore from '../../stores/user'

@observer
class SignIn extends Component {
    static propTypes = {

    };

    render() {
        return (
            <View>
                <Text style = {styles.header}>Please Sign In</Text>
                <Text>Email:</Text>
                <TextInput value={userStore.email}
                           onChangeText={this.setEmail}
                           style = {styles.input}
                           keyboardType='email-address'
                />
                <Text>Password:</Text>
                <TextInput value={userStore.password}
                           onChangeText={this.setPassword}
                           style = {styles.input}
                           secureTextEntry
                />
                <TouchableOpacity onPress = {this.signIn}>
                    <Text>Sign In</Text>
                </TouchableOpacity>
            </View>
        )
    }

    signIn = () => {
        firebase.auth().signInWithEmailAndPassword(userStore.email, userStore.password)
            .then((user) => {
                userStore.user = user
                this.props.navigation.navigate('eventList')
            })
        console.log('---', 'sign in')
    }

    setPassword = password => userStore.password = password
    setEmail = email => userStore.email = email
}

const styles = {
    header: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    input: {
        ...Platform.select({
            ios: {
                borderBottomColor: '#000',
                borderBottomWidth: 1
            },
            android: {

            }
        })
    }
}

export default SignIn