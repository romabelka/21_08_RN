import Event from './events'
import User from './user'
import Navigation from './navigation'
import People from './people'

const stores = {}

Object.assign(stores, {
    user: new User(stores),
    events: new Event(stores),
    people: new People(stores),
    navigation: new Navigation(stores)
})

export default stores