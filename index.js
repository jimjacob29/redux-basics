const redux = require('redux');

const createStore = redux.createStore;

const INIT_STATE = {
    count: 0,
    dummy: 'dummy'
};

const INCREMENT_COUNT = 'INCREMENT_COUNT';
const DECREMENT_COUNT = 'DECREMENT_COUNT';

//action creator
function increaseCountActionCreator() {
    return {
        type: INCREMENT_COUNT
    }
}
//action creator
function decrementCountActionCreator() {
    return {
        type: DECREMENT_COUNT
    }
}

//reducer
function counterReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case INCREMENT_COUNT: {
            return {
                ...state,
                count: state.count + 1
            }
        }
        case DECREMENT_COUNT: {
            if(state.count > 0) {
                return  {
                    ...state,
                    count: state.count - 1
                }
            }
            return state;
        }
        default:
            return state
    }
}

const store = createStore(counterReducer);


console.log("initial state", store.getState());






const onChangeCallback = () => {
    // show it on screen re-render
    console.log("changed state", store.getState());
    console.log("count is:", store.getState().count);
};


store.subscribe(onChangeCallback);

// document.getElementById("myButton").addEventListner(() => {store.dispatch(increaseCountActionCreator())})


store.dispatch(decrementCountActionCreator());
store.dispatch(increaseCountActionCreator());
store.dispatch(increaseCountActionCreator());
store.dispatch(increaseCountActionCreator());
store.dispatch(increaseCountActionCreator());
store.dispatch(decrementCountActionCreator());
store.dispatch(increaseCountActionCreator());
store.dispatch(decrementCountActionCreator());
store.dispatch(decrementCountActionCreator());

