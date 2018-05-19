import { normalizeResponseErrors } from "../actions/utils";
import {API_BASE_URL} from '../config';
// ALL OF THE EVENTS
export const FETCH_EVENTS_REQUEST = 'FETCH_EVENTS_DATA_REQUEST';
export const fetchEventsRequest = () =>({
    type: FETCH_EVENTS_REQUEST
});
export const FETCH_EVENTS_DATA_SUCCESS = 'FETCH_EVENTS_DATA_SUCCESS';
export const fetchEventsDataSuccess = data => ({
    type: FETCH_EVENTS_DATA_SUCCESS,
    data
});

export const FETCH_EVENTS_DATA_ERROR = 'FETCH_EVENTS_DATA_ERROR';
export const fetchEventsDataError = error => ({
    type: FETCH_EVENTS_DATA_ERROR,
    error
});
export const ADD_EVENT_SUCCESSFUL ="ADD_EVENT_SUCCESSFUL";
export const addEventsDataSuccessful = data => ({
    type: ADD_EVENT_SUCCESSFUL,
    data
});
export const ADD_EVENT_FAILED = "ADD_EVENT_FAILED";
export const addEventsDataFailed = error => ({
    type: ADD_EVENT_FAILED,
    error
});

// SINGLE EVENT
export const FETCH_SINGLE_EVENT_REQUEST = 'FETCH_SINGLE_EVENT_REQUEST';
export const fetchSingleEventRequest = () => ({
    type: FETCH_SINGLE_EVENT_REQUEST
});
export const FETCH_SINGLE_EVENT_FAILED = 'FETCH_SINGLE_EVENT_FAILED';
export const fetchEventFailed = error => ({
    type: FETCH_SINGLE_EVENT_FAILED,
    error
})
export const FETCH_SINGLE_EVENT_DATA_SUCCESS = 'FETCH_SINGLE_EVENT_DATA_SUCCESS';
export const fetchEventSuccess = data => ({
    type: FETCH_SINGLE_EVENT_DATA_SUCCESS,
    data
});
export const EDIT_SINGLE_EVENT_REQUEST = 'EDIT_SINGLE_EVENT_REQUEST';
export const editSingleEventRequest = () => ({
    type: EDIT_SINGLE_EVENT_REQUEST
});
export const EDIT_SINGLE_EVENT_SUCCESS = 'EDIT_SINGLE_EVENT_SUCCESS';
export const editSingleEventSuccess = data => ({
    type: EDIT_SINGLE_EVENT_SUCCESS,
    data
});
export const EDIT_SINGLE_EVENT_FAILED = 'EDIT_SINGLE_EVENT_FAILED';
export const editSingleEventFailed = error => ({
    type: EDIT_SINGLE_EVENT_FAILED,
    error
})
export const DELETE_SINGLE_EVENT_REQUEST = 'DELETE_SINGLE_EVENT_REQUEST';
export const deleteSingleEventRequest = () => ({
    type: DELETE_SINGLE_EVENT_REQUEST
});
export const DELETE_SINGLE_EVENT_SUCCESS = 'DELETE_SINGLE_EVENT_SUCCESS';
export const deleteSingleEventSuccess = data => ({
    type: DELETE_SINGLE_EVENT_SUCCESS,
    data
});
export const DELETE_SINGLE_EVENT_FAILED = 'DELETE_SINGLE_EVENT_FAILED';
export const deleteSingleEventFailed = error => ({
    type: DELETE_SINGLE_EVENT_FAILED,
    error
});


// POST ENDPOINT FOR ADDING AN EXERCISE EVENT
export const addEventsData = (exercise) => dispatch =>{
    return fetch(`${API_BASE_URL}/exercise/add/exercise`, {
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
    return fetch(`${API_BASE_URL}/exercise/` + id, {
        method: 'GET'
    })
        .then(res => res.json())
        .then(data =>  dispatch(fetchEventsDataSuccess(data)))
        .catch(err => {
            dispatch(fetchEventsDataError(err));
        });
    };
    
    export const fetchEventById = (eventId) => (dispatch) => {
        dispatch(fetchSingleEventRequest());
            return fetch(`${API_BASE_URL}/exercise/singleExercise/` + eventId,{
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
    dispatch(deleteSingleEventRequest());
    return fetch(`${API_BASE_URL}/exercise/delete/` + id, {
        method: 'DELETE'
    })
    .then (dispatch(deleteSingleEventSuccess(id)))
    .catch(err => dispatch(deleteSingleEventFailed(err)))
    };
    
    
    export const editEventsData = (id, exerciseobj) => dispatch => {
    dispatch(editSingleEventRequest());
    return fetch(`${API_BASE_URL}/exercise/edit/` + id,{
        method: 'PUT',
        body: JSON.stringify(exerciseobj),
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(dispatch(editSingleEventSuccess(exerciseobj)))
    .catch(err => dispatch(editSingleEventFailed(err)))
    };





