export const FETCH_WATER_REQUEST = 'FETCH_WATER_REQUEST';
export const fetchWaterRequest = () => ({
    type: FETCH_WATER_REQUEST
});

export const FETCH_WATER_SUCCESS= 'FETCH_WATER_SUCCESS';
export const fetchWaterSuccess = data => ({
    type:FETCH_WATER_SUCCESS,
    data
});

export const FETCH_WATER_ERROR = 'FETCH_WATER_ERROR';
export const fetchWaterError = error => ({
    type: FETCH_WATER_ERROR,
    error
});
export const ADD_WATER_SUCCESSFUL = 'ADD_WATER_SUCCESSFUL';
export const addWaterSuccessful = data => ({
    type: ADD_WATER_SUCCESSFUL,
    data
});

export const ADD_WATER_FAILED = 'ADD_WATER_FAILED';
export const addWaterFailed = error => ({
    type: ADD_WATER_FAILED,
    error
});
export const EDIT_WATER_SUCCESSFUL = 'EDIT_WATER_SUCCESSFUL';
export const editWaterSuccessful = data => ({
    type: EDIT_WATER_SUCCESSFUL,
    data
});

export const EDIT_WATER_FAILED = 'EDIT_WATER_FAILED';
export const editWaterFailed = error => ({
    type: EDIT_WATER_FAILED,
    error
});