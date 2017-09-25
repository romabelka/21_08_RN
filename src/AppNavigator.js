import {StackNavigator} from 'react-navigation'
import Auth from './screens/Auth'
import Event from './screens/events/Event'
import EventList from './screens/events/EventList'
import Person from './screens/people/Person'
import PersonList from './screens/people/PersonList'
import TabNav from './screens/TabNav'

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
    personList: {
        screen: PersonList
    },
    person: {
        screen: Person
    },
    tabNav: {
        screen: TabNav
    }
})

export default AppNavigator