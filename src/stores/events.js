import {observable, computed, action} from 'mobx'
import firebase from 'firebase'
import {entitiesFromFB} from './utils'
import {data} from '../fixtures'

class Events {
    @observable loading = false
    @observable loaded = false

    @observable entities = {}

    @computed get list() {
        return Object.values(this.entities)
    }

    @computed get length() {
        return Object.keys(this.entities).length
    }

    loadAll() {
        this.loading = true

        firebase.database().ref('events')
            .once('value', data => {
                this.entities = entitiesFromFB(data.val())
                this.loading = false
            })
    }
}

export default Events