import {FETCH_WEIGHTBMI_REQUEST,
        FETCH_WEIGHTBMI_SUCCESS,
        FETCH_WEIGHTBMI_ERROR,
        ADD_WEIGHTBMI_SUCCESSFUL,
        ADD_WEIGHTBMI_FAILED,
        DELETE_WEIGHTBMI_SUCCESS,
        DELETE_WEIGHTBMI_FAILED,} from '../actions/weightbmi';
//import {SubmissionError} from 'redux-form';

const initialState = {
    data: [],
    isFetching: false,
    isDeleting: false
}
export default function reducer(state = initialState, action) {
    if(action.type === FETCH_WEIGHTBMI_REQUEST){
        return Object.assign({}, state, {
            data: [],
            isFetching: true
        });
    } else if(action.type === FETCH_WEIGHTBMI_SUCCESS){
        return Object.assign({}, state, {
            data: action.data,
            isFetching: false
        });
    } else if(action.type ===FETCH_WEIGHTBMI_ERROR ){
        return Object.assign({}, state, {
          error: action.error  
        });
    } else if(action.type === ADD_WEIGHTBMI_SUCCESSFUL){
        return Object.assign({}, state, {
          data: [...state.data, action.data],
        });
    } else if(action.type ===ADD_WEIGHTBMI_FAILED ){  
        return Object.assign({}, state, {
            error: action.error
        });
    } else if(action.type === DELETE_WEIGHTBMI_SUCCESS){
       return Object.assign({}, state, {
            data:  [...state.data.filter(item => item._id !== action.data)],
            isDeleting: false
        });
    } else if(action.type === DELETE_WEIGHTBMI_FAILED){
        return Object.assign({}, state ,{
            error: action.error
        });
    }
    return state;
}
