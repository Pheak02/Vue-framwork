import { createApp } from 'vue';
import { createStore } from 'vuex';


import App from './App.vue';

const counterModule = {
    state(){
        return {
            counter: 0,
        }
    },
    mutations: {

        increment(state) { //this state param will garantee by vuex
            state.counter = state.counter + 2;
        },
        increase(state, payload){
            state.counter = state.counter + payload.value;
        },
    },
    actions:{

        increment(context) { //take context obj
            setTimeout(function() {
                context.commit('increment');
            }, 2000)
        },
        increase(context, payload) {
            console.log(context)
            context.commit('increase', payload)
        },
    },
    getters:{
        finalCounter(state) { // _ means i have to take it in order to work with the 2nd arg but i don't wanna work with it
            return state.counter * 2;
        },
        normalizedCounter(_, getters){
            const finalCounter = getters.finalCounter
            if (finalCounter < 0){
                return 0;
            }
            if (finalCounter > 100){
                return 100;
            }
            return finalCounter;
        },
    }
}

const store = createStore({
    modules: {
        numbers: counterModule
    },
    state(){
        return {
            isLoggedIn: false
        };
    },
    mutations: {
        setAuth(state, payload){
            state.isLoggedIn = payload.isAuth;
        }  
    },
    actions: { //to avoid async - consider good practice
        login(context){
            context.commit('setAuth', {isAuth: true})
        },
        logout(context){
            context.commit('setAuth', {isAuth: false})
        }

    },
    getters: {
        isUserAuth(state){
            return state.isLoggedIn;
        }
    }
})
const app = createApp(App)
app.use(store);
app.mount('#app');
