// import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
    state: {
        // users: [],
        // hobbies: [],
    },
    actions: {

    },
    mutations: {
        updateUsers(state, data) {
            state.users = data;
        }
    },
    modules: {}
})