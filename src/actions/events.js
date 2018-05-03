
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




