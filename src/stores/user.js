import {observable} from 'mobx'
import firebase from 'firebase'
import BasicStore from './BasicStore'

class User extends BasicStore{
    constructor(...args) {
        super(...args)

        firebase.auth().onAuthStateChanged(user => {
            const routeName = user ? 'eventList' : 'auth'
            this.getStore('navigation').reset(routeName)
        })
    }

    @observable email: ''
    @observable password: ''

    user: null
}

export default User