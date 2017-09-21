import React, {Component} from 'react'
import {View, StyleSheet, Image, Text, Button, Modal, TouchableHighlight} from 'react-native'
import Card from '../common/Card'

class EventCard extends Component {
    state = {
        modalVisible: false,
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <Card style={styles.container}>
                <Image
                    source={{uri: 'http://lorempixel.com/100/50/technics'}}
                    style={styles.image}
                />
                <View style={styles.description}>
                    <Text>{this.props.event.url}</Text>
                    <View style={styles.button}>
                        <Button
                                title={"Delete Event"}
                                onPress={() => this.setModalVisible(true)}
                        />

                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={this.state.modalVisible}
                            onRequestClose={() => {alert("Modal has been closed.")}}
                        >
                            <View style={styles.modal}>
                                <View>
                                    <Text>Are you sure?</Text>

                                    <TouchableHighlight onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible)
                                    }}>
                                        <Text>OK</Text>
                                    </TouchableHighlight>

                                </View>
                            </View>
                        </Modal>

                    </View>

                </View>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 50
    },
    container: {
        flexDirection: 'row',
    },
    description: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        borderBottomWidth: 1
    },
    button: {
        width: 200
    },
    modal: {
        width: 100,
        height: 100,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        marginTop: 100,
        marginLeft: 100,
        borderWidth: 1
    }
})

export default EventCard