import Event from './events'
import User from './user'

const stores = {
    user: new User(),
    events: new Event()
}

export default stores