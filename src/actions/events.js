import { normalizeResponseErrors } from "./utils";
import {SubmissionError} from 'redux-form';
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

// SINGLE EVENT
export const FETCH_EVENT_REQUEST = 'FETCH_EVENT_REQUEST';
export const fetchSingleEventRequest = () => ({
    type: FETCH_EVENT_REQUEST
});
export const FETCH_EVENT_FAILED = 'FETCH_EVENT_FAILED';
export const fetchEventFailed = error => ({
    type: FETCH_EVENT_FAILED,
    error
})
export const FETCH_EVENT_DATA_SUCCESS = 'FETCH_EVENT_DATA_SUCCESS';
export const fetchEventSuccess = data => ({
    type: FETCH_EVENT_DATA_SUCCESS,
    data
});




// POST ENDPOINT FOR ADDING AN EXERCISE EVENT
export const addEventsData = dispatch =>{
    alert('form being dispatched');
    console.log(dispatch);
    return fetch('http://localhost:8080/exercise/add/exercise', {
    method: 'POST',
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

export const fetchEventById = (eventId) => {
    return (dispatch) => {
        dispatch(fetchSingleEventRequest());
            return fetch('http://localhost:8080/exercise/' + eventId)
            .then(res => res.json())
            .then(res => {console.log(res)})
            .then(data => dispatch(fetchEventSuccess(data)))
            .catch(err => {
                dispatch(fetchEventFailed(err));
            });
    }
}
export const editEventsData = (id) => dispatch => {
    console.log(dispatch)
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