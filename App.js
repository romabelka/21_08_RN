import './src/initFB'
import React from 'react'
import {Provider} from 'mobx-react'
import AppNavigator from './src/AppNavigator'
import stores from './src/stores'

export default class App extends React.Component {
    render() {
        return (
            <Provider {...stores}>
               <AppNavigator />
            </Provider>
        )
    }
}