import {FETCH_WATER_REQUEST,
        fetchWaterRequest,
        FETCH_WATER_SUCCESS,
        fetchWaterSuccess,
        FETCH_WATER_ERROR,
        fetchWaterError,
        ADD_WATER_SUCCESSFUL,
        addWaterSuccessful,
        ADD_WATER_FAILED,
        addWaterFailed,
        EDIT_WATER_SUCCESSFUL,
        editWaterSuccessful,
        EDIT_WATER_FAILED,
        editWaterFailed} from '../actions/water';

        const initialState = {
            error: null,
            singleDayIntake: null
        };

export default function reducer(state = initialState, action) {
    if(action.type === FETCH_WATER_REQUEST){
        return Object.assign({}, state, {
            data: [],
            isFetching: true
        });
    } else if(action.type === FETCH_WATER_SUCCESS){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;//January is 0!`    
        var yyyy = today.getFullYear();
        if(dd<10){dd='0'+dd}
        if(mm<10){mm='0'+mm}
        let todaysDate = mm+''+dd+''+yyyy;
        let todaysDateIntake = action.data.filter(e => e.waterDate === todaysDate);

        return Object.assign({}, state, {
            isFetching: false,
            singleDayIntake: todaysDateIntake["0"].waterIntake

        });
    } else if(action.type ===FETCH_WATER_ERROR ){
        console.log(action.error);
        return Object.assign({}, state, {
          error: action.error  
        });
    } else if(action.type === ADD_WATER_SUCCESSFUL){
        return Object.assign({}, state, {
          singleDayIntake: action.data.waterIntake
        });
    } else if(action.type ===ADD_WATER_FAILED ){  
        return Object.assign({}, state, {
            error: action.error
        });
    }else if(action.type === EDIT_WATER_SUCCESSFUL){
        console.log('after edit the new one is: ' + action.data);
        return Object.assign({}, state, {
            singleDayIntake: action.data
        });
    } else if(action.type === EDIT_WATER_FAILED){
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}

export const fetchWater = (idDate) => dispatch => {
console.log(idDate);
    dispatch(fetchWaterRequest());
    return fetch('http://localhost:8080/water/waterintake/' + idDate, {
        method: 'GET'
    })
    .then(res => res.json())

    .then(data => dispatch(fetchWaterSuccess(data)))
    .catch(err => {
        dispatch(fetchWaterError(err));
    });
};

export const addWater = (water) => dispatch => {
    return fetch('http://localhost:8080/water/add', {
        method: 'POST',
        body: JSON.stringify(water),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => dispatch(addWaterSuccessful(data)))
        .catch(err => dispatch(addWaterFailed(err)))

}
export const editWater = (water) => dispatch => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;//January is 0!`    
    var yyyy = today.getFullYear();
    if(dd<10){dd='0'+dd}
    if(mm<10){mm='0'+mm}
    let waterDate = mm+''+dd+''+yyyy;

    return fetch('http://localhost:8080/water/waterintake/edit/' + waterDate,{
    method: 'PUT',
    body: JSON.stringify({"waterIntake": water}),
    headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
    }
    })
    .then(dispatch(editWaterSuccessful(water)))
    .catch(err => dispatch(editWaterFailed(err)))
}
