import { createApp } from 'vue';
import { createStore } from 'vuex';


import App from './App.vue';

const store = createStore({
    state(){
        return {
            counter: 0
        };
    },
    mutations: {
        increment(state) { //this state param will garantee by vuex
            state.counter = state.counter + 2;
        },
        increase(state, payload){
            state.counter = state.counter + payload.value;
        }  
    },
    getters: {
        finalCounter(_, state) { // _ means i have to take it in order to work with the 2nd arg but i don't wanna work with it
            return state.counter * 2;
        },
        normalizedCounter(state, getters){
            const finalCounter = getters.finalCounter
            if (finalCounter < 0){
                return 0;
            }
            if (finalCounter > 100){
                return 100;
            }
            return finalCounter;
        }
    }
})
const app = createApp(App)
app.use(store);
app.mount('#app');
