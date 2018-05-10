import {FETCH_WEIGHTBMI_REQUEST,
        fetchWeightBmiRequest,
        FETCH_WEIGHTBMI_SUCCESS,
        fetchWeightBmiSuccess,
        FETCH_WEIGHTBMI_ERROR,
        fetchWeightBmiError,
        ADD_WEIGHTBMI_SUCCESSFUL,
        addWeightBmiSuccessful,
        ADD_WEIGHTBMI_FAILED,
        addWeightBmiFailed,
        DELETE_WEIGHTBMI_SUCCESS,
        deleteWeightBmiSuccess,
        DELETE_WEIGHTBMI_FAILED,
        deleteWeightBmiFailed} from '../actions/weightbmi';
import { normalizeResponseErrors } from "../actions/utils";
//import {SubmissionError} from 'redux-form';

const initialState = {
    data: [],
    isFetching: false,
    isDeleting: false
}
export default function reducer(state = initialState, action) {
    if(action.type === FETCH_WEIGHTBMI_REQUEST){
        console.log('fetching');
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
        console.log(action.error);
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
        console.log('in error');
        return Object.assign({}, state ,{
            error: action.error
        });
    }
    return state;
}
export const deleteWeightBmi = (id) => dispatch => {
    console.log(id);
    return fetch ('http://localhost:8080/weightandbmi/delete/' + id, {
        method: 'DELETE'
    })
    .then (dispatch(deleteWeightBmiSuccess(id)))
    .catch(err =>{
        dispatch(deleteWeightBmiFailed(err));
    });
};
export const fetchWeightBmi = (id) => dispatch => {
    dispatch(fetchWeightBmiRequest());
    return fetch('http://localhost:8080/weightandbmi/' + id, {
        method: 'GET'
    })
    .then(res => res.json())

    .then(data => dispatch(fetchWeightBmiSuccess(data)))
    .catch(err => {
        dispatch(fetchWeightBmiError(err));
    });
};

export const addWeightBmi = (weightbmi) => dispatch => {
    console.log(weightbmi);
    return fetch('http://localhost:8080/weightandbmi/add/weightbmi', {
        method: 'POST',
        body: JSON.stringify(weightbmi),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => dispatch(addWeightBmiSuccessful(data)))
        .catch(err => dispatch(addWeightBmiFailed(err)))

}
