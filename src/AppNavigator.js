import {StackNavigator} from 'react-navigation'
import Auth from './screens/Auth'
import Event from './screens/events/Event'
import EventList from './screens/events/EventList'


const AppNavigator = StackNavigator({
    auth: {
        screen: Auth
    },
    eventList: {
        screen: EventList
    },
    event: {
        screen: Event
    },
})

export default AppNavigator