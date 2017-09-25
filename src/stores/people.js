import {observable, computed, action} from 'mobx'
import firebase from 'firebase'
import BasicStore from './BasicStore'
import {entitiesFromFB} from './utils'

class People extends BasicStore {
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
        firebase.database().ref('people')
            .once('value').then( data => {
            this.entities = entitiesFromFB(data.val())
            this.loading = false
        })
    }
}

export default People