import {FETCH_EVENTS_DATA_SUCCESS, 
        FETCH_EVENT_DATA_SUCCESS, 
        EDIT_EVENT, 
        FETCH_EVENTS_DATA_ERROR, 
        FETCH_EVENTS_REQUEST, 
        FETCH_EVENT_FAILED, 
        FETCH_EVENT_REQUEST } from '../actions/events';

const initialState = {
    data: [],
    singleEvent: {},
    error: null,
    isEditing: false,
    isDelete: false,
    isFetching: false
    
};

export default function reducer(state = initialState, action){
    if(action.type === FETCH_EVENTS_REQUEST){
        console.log('fetching');
        return Object.assign({}, state, {
            data: [],
            error: null,
            isEditing: false,
            isDelete: false,
            isFetching: true
        })
    }
    else if (action.type === FETCH_EVENTS_DATA_SUCCESS){
        console.log('fetch succeeded');
    return Object.assign({}, state, {
         data: action.data,
         error: null,
         isEditing: false,
         isDelete: false,
         isFetch: false
    });
    } else if(action.type === FETCH_EVENTS_DATA_ERROR){
        return Object.assign({}, state, {
            error: action.error
        });
    
    } else if(action.type=== FETCH_EVENT_REQUEST){
        console.log('Fetching single exercise')
        return Object.assign({}, state, {
            singleEvent: {},
            isEditing: false,
            isDelete: false,
            isFetch: true
        })

    }else if(action.type === FETCH_EVENT_DATA_SUCCESS ){
        return Object.assign({}, state, {
            isEditing: false,
            isDelete: false,
            isFetch: false,
            singleEvent: action.singleEvent
        });
    } else if(action.type === FETCH_EVENT_FAILED){
        return Object.assign({}, state, {
            error: action.error
        });
    }

    return state;
}
