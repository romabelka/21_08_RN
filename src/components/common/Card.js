import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native'

class Card extends Component {
    static propTypes = {

    };

    render() {
        const {children, style} = this.props
        return (
            <View style = {[styles.container, style]}>
                {children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.8,
        shadowOffset: {
            height: 2,
            width: 0
        },
        elevation: 5,
        backgroundColor: '#FFFFFF'
    }
})

export default Card