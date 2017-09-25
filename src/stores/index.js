import Event from './events'
import User from './user'
import Navigation from './navigation'
import People from './people'

const stores = {}
stores.user = new User(stores)
stores.events = new Event(stores)
stores.navigation = new Navigation(stores)
stores.people = new People(stores)

export default stores