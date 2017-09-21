import {StackNavigator} from 'react-navigation'
import Auth from './screens/Auth'
import Event from './screens/events/Event'
import EventList from './screens/events/EventList'


const AppNavigator = StackNavigator({
    eventList: {
        screen: EventList
    },
    auth: {
        screen: Auth
    },
    event: {
        screen: Event
    },
})

export default AppNavigator