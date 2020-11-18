const redux = require('redux');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

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

/// --------
const INIT_STATE_CUSTOM = {
    custom_counter: 0
};

// increment by custom amount
const INCREMENT_BY_CUSTOM_AMOUNT = 'INCREMENT_BY_CUSTOM_AMOUNT';


//action creator
function incrementByCustomAmountActionCreator(number) {
    return {
        type: INCREMENT_BY_CUSTOM_AMOUNT,
        payload: number
    }
}

function customIncrementReducer(state = INIT_STATE_CUSTOM, action) {
    switch (action.type) {
        case INCREMENT_BY_CUSTOM_AMOUNT: {
            return {
                ...state,
                custom_counter: state.custom_counter + action.payload
            }
        }
        default:{
            return state;
        }
    }
}


const rootReducer = combineReducers({
    simpleCounter: counterReducer,
    customCounter: customIncrementReducer
});

const store = createStore(rootReducer);


console.log("initial state", store.getState());






const onChangeCallback = () => {
    // show it on screen re-render
    console.log("changed state", store.getState());
    console.log("count is:", store.getState().count);
};


const unsubscribe = store.subscribe(onChangeCallback);

// document.getElementById("myButton").addEventListner(() => {store.dispatch(increaseCountActionCreator())})



store.dispatch(increaseCountActionCreator());
store.dispatch(decrementCountActionCreator());

// dispatch action for second reducer
store.dispatch(incrementByCustomAmountActionCreator(10));
unsubscribe();
