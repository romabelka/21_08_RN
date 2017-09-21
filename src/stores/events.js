import {observable, computed, action} from 'mobx'
import firebase from 'firebase'
import BasicStore from './BasicStore'
import {entitiesFromFB} from './utils'

class Events extends BasicStore {
    @observable loading = false
    @observable loaded = false

    @observable entities = {}

    @computed get list() {
        return Object.values(this.entities)
    }

    @computed get length() {
        return Object.keys(this.entities).length
    }

    @action loadAll() {
        this.loading = true

        firebase.database().ref('events')
            .once('value', data => {
                this.entities = entitiesFromFB(data.val())
                this.loading = false
            })
    }
}

export default Events