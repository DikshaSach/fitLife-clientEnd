export const FETCH_WEIGHTBMI_REQUEST = 'FETCH_WEIGHTBMI_REQUEST';
export const fetchWeightBmiRequest = () => ({
    type: FETCH_WEIGHTBMI_REQUEST
});

export const FETCH_WEIGHTBMI_SUCCESS= 'FETCH_WEIGHTBMI_SUCCESS';
export const fetchWeightBmiSuccess = data => ({
    type:FETCH_WEIGHTBMI_SUCCESS,
    data
});

export const FETCH_WEIGHTBMI_ERROR = 'FETCH_WEIGHTBMI_ERROR';
export const fetchWeightBmiError = error => ({
    type: FETCH_WEIGHTBMI_ERROR,
    error
});
export const ADD_WEIGHTBMI_SUCCESSFUL = 'ADD_WEIGHTBMI_SUCCESSFUL';
export const addWeightBmiSuccessful = data => ({
    type: ADD_WEIGHTBMI_SUCCESSFUL,
    data
});

export const ADD_WEIGHTBMI_FAILED = 'ADD_WEIGHTBMI_FAILED';
export const addWeightBmiFailed = error => ({
    type: ADD_WEIGHTBMI_FAILED,
    error
});
export const DELETE_WEIGHTBMI_SUCCESS = 'DELETE_WEIGHTBMI_SUCCESS';
export const deleteWeightBmiSuccess = data =>({
    type: DELETE_WEIGHTBMI_SUCCESS,
    data
});
export const DELETE_WEIGHTBMI_FAILED = 'DELETE_WEIGHTBMI_FAILED';
export const deleteWeightBmiFailed = error =>({
    type: DELETE_WEIGHTBMI_FAILED,
    error

});