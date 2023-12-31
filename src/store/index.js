import { createStore } from 'redux'
const createReducer = (state = { counter: 0}, action) => {
    if(action.type === 'increment'){
    return {
        counter: state.counter + 1
    }
    }
    if(action.type === 'incrementBy5'){
        return {
            counter: state.counter + action.value
        }
    }
    if(action.type === 'decrement'){
        return {
            counter: state.counter - 1
        }
    }
    return state;
}

const store = createStore(createReducer)
export  default store;