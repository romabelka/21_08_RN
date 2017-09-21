import {observable} from 'mobx'

class User {
    @observable email: ''
    @observable password: ''

    user: null
}

export default new User()