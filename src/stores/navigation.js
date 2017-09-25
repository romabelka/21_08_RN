import {observable, action, computed} from 'mobx'
import AppNavigator from '../AppNavigator'
import {NavigationActions} from 'react-navigation'
import BasicStore from './BasicStore'
import {toJS, autorun} from 'mobx'

class Navigation extends BasicStore {
    constructor(...args) {
        super(...args)

        autorun(() => {
            const userStore = this.getStore('user')
            const routeName = userStore.user ? 'lists' : 'auth'
            this.reset(routeName)
        })
    }

    @observable state = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('auth'))

    @action dispatch = (action) => {
        this.state = AppNavigator.router.getStateForAction(action, this.state)
    }

    @computed get config() {
        return {
            dispatch: this.dispatch,
            state: {
                ...this.state,
                routes: toJS(this.state.routes)
            }
        }
    }

    @action reset(routeName) {
        const action = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName })
            ]
        })

        this.dispatch(action)
    }

    @action goTo(routeName, params) {
        this.dispatch(NavigationActions.navigate({ routeName, params }))
    }
}

export default Navigation