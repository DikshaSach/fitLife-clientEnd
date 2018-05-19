import {FETCH_WATER_REQUEST,
        FETCH_WATER_SUCCESS,
        FETCH_WATER_ERROR,
        FETCH_ALL_WATER_REQUEST,
        FETCH_ALL_WATER_SUCCESS,
        FETCH_ALL_WATER_ERROR,
        ADD_WATER_SUCCESSFUL,
        ADD_WATER_FAILED,
        EDIT_WATER_SUCCESSFUL,
        EDIT_WATER_FAILED,
        CLICKED_ON_WATER_FORM,
        WATER_FORM_SUBMITTED} from '../actions/water';

        const initialState = {
            data: [],
            error: null,
            singleDayIntake: null,
            WaterDataForDayExists: false,
            allWaterData: [],
            waterFormSubmitting: true/false
        };

export default function reducer(state = initialState, action) {
    if(action.type === FETCH_WATER_REQUEST){
        return Object.assign({}, state, {
            isFetching: true
        });
    } else if(action.type === FETCH_WATER_SUCCESS){
        return Object.assign({}, state, {
            data: action.data,
            isFetching: false,
            singleDayIntake: action.data["0"].waterIntake,
            WaterDataForDayExists: true
        });
    } else if(action.type ===FETCH_WATER_ERROR ){
        return Object.assign({}, state, {
          error: action.error  
        });
    } else if(action.type === ADD_WATER_SUCCESSFUL){
        return Object.assign({}, state, {
          singleDayIntake: action.data.waterIntake,
          WaterDataForDayExists: true
        });
    } else if(action.type ===ADD_WATER_FAILED ){  
        return Object.assign({}, state, {
            error: action.error
        });
    }else if(action.type === EDIT_WATER_SUCCESSFUL){
        return Object.assign({}, state, {
            singleDayIntake: action.data
        });
    } else if(action.type === EDIT_WATER_FAILED){
        return Object.assign({}, state, {
            error: action.error
        });
    }if(action.type === FETCH_ALL_WATER_REQUEST){
        return Object.assign({}, state, {
            isFetching: true
        });
    } else if(action.type === FETCH_ALL_WATER_SUCCESS){
        return Object.assign({}, state, {
            allWaterData: action.data,
            isFetching: false,
        });
    } else if(action.type ===FETCH_ALL_WATER_ERROR ){
        return Object.assign({}, state, {
          error: action.error  
        });
    } else if(action.type === CLICKED_ON_WATER_FORM){
        return Object.assign({}, state, {
            waterFormSubmitting: true
        })
    }else if(action.type === WATER_FORM_SUBMITTED){
        return Object.assign({}, state, {
            waterFormSubmitting: false
        })
    }
return state;
}
