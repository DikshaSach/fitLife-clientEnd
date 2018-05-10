import {FETCH_EVENTS_REQUEST,
    FETCH_EVENTS_DATA_SUCCESS, 
    fetchEventsDataSuccess,
    FETCH_SINGLE_EVENT_DATA_SUCCESS,
    fetchEventSuccess,
    //EDIT_EVENT, 
    FETCH_EVENTS_DATA_ERROR,
    fetchEventsDataError, 
    fetchSingleEventRequest, 
    FETCH_SINGLE_EVENT_FAILED, 
    fetchEventFailed,
    FETCH_SINGLE_EVENT_REQUEST,
    fetchEventsRequest,
    ADD_EVENT_SUCCESSFUL,
    addEventsDataSuccessful,
    ADD_EVENT_FAILED,
    addEventsDataFailed,
    EDIT_SINGLE_EVENT_REQUEST,
    editSingleEventRequest,
    EDIT_SINGLE_EVENT_SUCCESS,
    editSingleEventSuccess,
    EDIT_SINGLE_EVENT_FAILED,
    editSingleEventFailed,
    DELETE_SINGLE_EVENT_REQUEST,
    deleteSingleEventRequest,
    DELETE_SINGLE_EVENT_SUCCESS,
    deleteSingleEventSuccess,
    DELETE_SINGLE_EVENT_FAILED,
    deleteSingleEventFailed,
     } from '../actions/events';
import { normalizeResponseErrors } from "../actions/utils";
import {SubmissionError} from 'redux-form';


const initialState = {
data: [],
singleEvent: [],
error: null,
isEditing: false,
isDelete: false,
isFetching: false

};

export default function reducer(state = initialState, action){
if(action.type === FETCH_EVENTS_REQUEST){
    return Object.assign({}, state, {
        data: [],
        error: null,
        isEditing: false,
        isDelete: false,
        isFetching: true
    })
}
else if (action.type === FETCH_EVENTS_DATA_SUCCESS){
return Object.assign({}, state, {
     data:  action.data,
     error: null,
     isEditing: false,
     isDelete: false,
     isFetching: false
});
} else if(action.type === FETCH_EVENTS_DATA_ERROR){
    return Object.assign({}, state, {
        error: action.error
    });

} else if(action.type=== FETCH_SINGLE_EVENT_REQUEST){
    return Object.assign({}, state, {
        singleEvent: {},
        isEditing: false,
        isDelete: false,
        isFetching: true
    });

}else if(action.type === FETCH_SINGLE_EVENT_DATA_SUCCESS ){
    console.log(action.data);
    return Object.assign({}, state, {
        isEditing: false,
        isDelete: false,
        isFetching: false,
        singleEvent: action.data
    });
} else if(action.type === FETCH_SINGLE_EVENT_FAILED){
    return Object.assign({}, state, {
        error: action.error
    });
} else if(action.type === ADD_EVENT_SUCCESSFUL){
    return Object.assign({}, state, {
        data: [...state.data, action.data]
    });
} else if(action.type === ADD_EVENT_FAILED){
    return Object.assign({}, state, {
        error: action.error
    });
}else if(action.type === DELETE_SINGLE_EVENT_REQUEST){
    console.log(state);
    return Object.assign({}, state, {
        isDelete: true,
    });
}else if(action.type === DELETE_SINGLE_EVENT_SUCCESS){
    console.log('in delete success');
    return Object.assign({}, state, {
        isDelete: false,
        data:  [...state.data.filter(item => item._id !== action.data)]
        
    });

}else if(action.type === DELETE_SINGLE_EVENT_FAILED){
    console.log('in error');
    return Object.assign({}, state, {
        error: action.error
    });
}

return state;
}

// POST ENDPOINT FOR ADDING AN EXERCISE EVENT
export const addEventsData = (exercise) => dispatch =>{
console.log(exercise);
return fetch('http://localhost:8080/exercise/add/exercise', {
    method: 'POST',
    body: JSON.stringify(exercise),
    headers: {
            'content-type': 'application/json'
    }
})
.then(res => normalizeResponseErrors(res))
.then(res => res.json())
.then(data => dispatch(addEventsDataSuccessful(data)))
.catch(err =>  dispatch(addEventsDataFailed(err)))   

}
// GET ENDPOINT FOR GETTING ALL EVENTS
export const fetchEventsData = (id) => (dispatch)  => {
dispatch(fetchEventsRequest());
return fetch('http://localhost:8080/exercise/' + id, {
    method: 'GET'
})
    .then(res => res.json())
    .then(data =>  dispatch(fetchEventsDataSuccess(data)))
    .catch(err => {
        dispatch(fetchEventsDataError(err));
    });
};

export const fetchEventById = (eventId) => (dispatch) => {
    console.log('in fetch event for single event');
    dispatch(fetchSingleEventRequest());
        return fetch('http://localhost:8080/exercise/singleExercise/' + eventId,{
            method: 'GET'

        })
        .then(res => res.json())
        .then(data => dispatch(fetchEventSuccess(data)) 
    )

        .catch(err => {
            dispatch(fetchEventFailed(err));
        });
};

export const deleteSingleEvent = (id) => dispatch => {
console.log(id);
dispatch(deleteSingleEventRequest());
return fetch('http://localhost:8080/exercise/delete/' + id, {
    method: 'DELETE'
})
.then (dispatch(deleteSingleEventSuccess(id)))
.catch(err => dispatch(deleteSingleEventFailed(err)))
};


export const editEventsData = (id) => dispatch => {
console.log(dispatch);
console.log('in edit function');
dispatch(editSingleEventRequest());
return fetch('http://localhost:8080/exercise/edit/' + id,{
    method: 'PUT',
    body: JSON.stringify(dispatch),
    headers: {
        'content-type': 'application/json'
    }
})
.then(res => normalizeResponseErrors(res))
.then(res => res.json())
.catch(err => {
    const {reason, message, location} = err;
    if (reason === 'ValidationError') {
        // Convert ValidationErrors into SubmissionErrors for Redux Form
        return Promise.reject(
            new SubmissionError({
                [location]: message
            })
        );
        }
         console.log(err)
    });
};