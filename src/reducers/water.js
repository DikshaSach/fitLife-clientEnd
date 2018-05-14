import {FETCH_WATER_REQUEST,
        FETCH_WATER_SUCCESS,
        FETCH_WATER_ERROR,
        ADD_WATER_SUCCESSFUL,
        ADD_WATER_FAILED,
        EDIT_WATER_SUCCESSFUL,
        EDIT_WATER_FAILED,} from '../actions/water';

        const initialState = {
            data: [],
            error: null,
            singleDayIntake: null,
            WaterDataForDayExists: false
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
        console.log(action.error);
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

