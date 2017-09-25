import Event from './events'
import User from './user'
import Navigation from './navigation'
import People from './people'

const stores = {}

Object.assign(stores, {
    user: new User(stores),
    events: new Event(stores),
    navigation: new Navigation(stores),
    people: new People(stores)
})

export default stores