import EntitiesStore, {subscribeHelper}  from './EntitiesStore'
import {computed, action} from 'mobx'
import groupBy from 'lodash/groupBy'
import firebase from 'firebase'

class PeopleStore extends EntitiesStore {
    @computed get sections() {
        const grouped = groupBy(this.list, person => person.firstName.charAt(0))

        return Object.entries(grouped).map(([letter, list]) => ({
            title: `${letter}, ${list.length} people`,
            data: list.map(person => ({key: person.uid, person}))
        }))
    }

    @action updatePerson(uid, data) {
        //todo add loader on camera, add realtime
        firebase.database().ref(`people/${uid}`).update(data)
    }

    @action loadAll = subscribeHelper('people')
}

export default PeopleStore