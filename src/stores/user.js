import {observable} from 'mobx'
import firebase from 'firebase'
import BasicStore from './BasicStore'

class User extends BasicStore{
    constructor(...args) {
        super(...args)

        firebase.auth().onAuthStateChanged(user => this.user = user)
    }

    @observable email: ''
    @observable password: ''

    @observable user: null
}

export default User