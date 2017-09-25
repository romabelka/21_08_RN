import {TabNavigator} from 'react-navigation'
import PersonList from './people/PersonList'
import EventList from './events/EventList'

const TabNav = TabNavigator({
    eventList: {
        screen: EventList
    },
    personList: {
        screen: PersonList
    },
}, {
    tabBarPosition: 'top',
    animationEnabled: true
})

export default TabNav