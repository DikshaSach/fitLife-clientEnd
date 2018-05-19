import {API_BASE_URL} from '../config';
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
export const FETCH_ALL_WATER_REQUEST = 'FETCH_ALL_WATER_REQUEST';
export const fetchAllWaterRequest = () => ({
    type: FETCH_ALL_WATER_REQUEST
});

export const FETCH_ALL_WATER_SUCCESS= 'FETCH_ALL_WATER_SUCCESS';
export const fetchAllWaterSuccess = data => ({
    type:FETCH_ALL_WATER_SUCCESS,
    data
});

export const FETCH_ALL_WATER_ERROR = 'FETCH_ALL_WATER_ERROR';
export const fetchAllWaterError = error => ({
    type: FETCH_ALL_WATER_ERROR,
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
export const CLICKED_ON_WATER_FORM = "CLICKED_ON_WATER_FORM";
export const clickedOnWaterForm = ()=>  ({
    type: CLICKED_ON_WATER_FORM
});
export const WATER_FORM_SUBMITTED = "WATER_FORM_SUBMITTED";
export const waterFormSubmitted = ()=> ({
    type: WATER_FORM_SUBMITTED
})

export const fetchAllWaterDates = (id) => dispatch => {
    dispatch(fetchAllWaterRequest());
    return fetch(`${API_BASE_URL}/water/waterintake/all/` + id , {
        method: 'GET'
    })
    .then(res => res.json())

    .then(data => dispatch(fetchAllWaterSuccess(data)))
    .catch(err => {
        dispatch(fetchAllWaterError(err));
    });
}

export const fetchWater = (idDate) => dispatch => {
    dispatch(fetchWaterRequest());
    return fetch(`${API_BASE_URL}/water/waterintake/` + idDate , {
        method: 'GET'
    })
    .then(res => res.json())

    .then(data => dispatch(fetchWaterSuccess(data)))
    .catch(err => {
        dispatch(fetchWaterError(err));
    });
};

export const addWater = (water) => dispatch => {
    dispatch(clickedOnWaterForm());
    return fetch(`${API_BASE_URL}/water/add`, {
        method: 'POST',
        body: JSON.stringify(water),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => dispatch(addWaterSuccessful(data)))
        .then(dispatch(waterFormSubmitted()))
        .catch(err => dispatch(addWaterFailed(err)))

}
export const editWater = (water) => dispatch => {
    dispatch(clickedOnWaterForm());
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;//January is 0!`    
    var yyyy = today.getFullYear();
    if(dd<10){dd='0'+dd}
    if(mm<10){mm='0'+mm}
    let waterDate = mm+''+dd+''+yyyy;

    return fetch(`${API_BASE_URL}/water/waterintake/edit/` + waterDate,{
    method: 'PUT',
    body: JSON.stringify({"waterIntake": water}),
    headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
    }
    })
    .then(dispatch(editWaterSuccessful(water)))
    .then(dispatch(waterFormSubmitted()))
    .catch(err => dispatch(editWaterFailed(err)))
}
