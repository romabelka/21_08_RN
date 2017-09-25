import EntitiesStore, {loadAllHelper} from './EntitiesStore'
import {action} from 'mobx'

class Events extends EntitiesStore {
    @action loadAll = loadAllHelper('events')
}


export default Events