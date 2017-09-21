import './src/initFB'
import React from 'react'
import {Provider, observer} from 'mobx-react'
import {addNavigationHelpers} from 'react-navigation'
import AppNavigator from './src/AppNavigator'
import stores from './src/stores'

@observer
export default class App extends React.Component {
    render() {
        return (
            <Provider {...stores}>
               <AppNavigator navigation = {addNavigationHelpers(stores.navigation.config)} />
            </Provider>
        )
    }
}