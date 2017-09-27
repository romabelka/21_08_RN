import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Camera, Permissions} from 'expo';
import firebase from 'firebase'

class Avatar extends Component {
    state = {
        hasCameraPermission: false,
        type: 'front',
        ratio: '16:9'
    };

    async componentDidMount() {
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        console.log('status', status)
        this.setState({hasCameraPermission: status === 'granted'});
    }

    takePicture = async () => {
        const {personUid} = this.props
        if (this.camera) {
            const {uri, base64} = await this.camera.takePictureAsync({base64: true})

            const fileName = uri.split('/').pop();
            const fileExt= fileName.split('.').pop()

            const storageRef = firebase.storage().ref(`Avatars/${personUid}.${fileExt}`);
            try {
                const result = await storageRef.putString(base64, 'base64')
                console.log('result', result.state)
            } catch (e) {
                console.log('result', e)
            }
        }
    };

    render() {
        const {hasCameraPermission} = this.state;
        if (!hasCameraPermission) {
            return <View/>
        }
        return (
            <View style={{flex: 1}}>
                <Text>Сделайте фотку для аватарки</Text>
                <Camera type={this.state.type} ratio={this.state.ratio} ref={ref => { this.camera = ref; }}>
                    <View style={styles.camera}>
                    </View>
                </Camera>
                <TouchableOpacity
                    style={[
                        styles.flipButton,
                        styles.picButton,

                    ]}
                    onPress={this.takePicture}>
                    <Text style={styles.flipText}> Save Avatar </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    camera: {
        backgroundColor: 'transparent',
        width: 'auto',
        height: 200
    },
    flipButton: {
        width: 100,
        height: 60,
        marginHorizontal: 2,
        marginBottom: 10,
        marginTop: 20,
        borderRadius: 8,
        borderColor: 'white',
        borderWidth: 1,
        padding: 5,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    picButton: {
        backgroundColor: 'darkseagreen',
    },
    flipText: {
        color: 'white',
        fontSize: 15,
    }
})
export default Avatar