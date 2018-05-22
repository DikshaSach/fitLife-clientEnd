import {FETCH_EVENTS_REQUEST,
    FETCH_EVENTS_DATA_SUCCESS, 
    FETCH_SINGLE_EVENT_DATA_SUCCESS,
    FETCH_EVENTS_DATA_ERROR,
    FETCH_SINGLE_EVENT_FAILED, 
    FETCH_SINGLE_EVENT_REQUEST,
    ADD_EVENT_SUCCESSFUL,
    ADD_EVENT_FAILED,
    EDIT_SINGLE_EVENT_REQUEST,
    EDIT_SINGLE_EVENT_SUCCESS,
    EDIT_SINGLE_EVENT_FAILED,
    DELETE_SINGLE_EVENT_REQUEST,
    DELETE_SINGLE_EVENT_SUCCESS,
    DELETE_SINGLE_EVENT_FAILED,
     } from '../actions/events';




const initialState = {
data: [],
singleEvent: [],
error: null,
isEditing: false,
isDelete: false,
isFetching: false

};

export default function reducer(state = initialState, action){
if(action.type === FETCH_EVENTS_REQUEST){
    return Object.assign({}, state, {
        data: [],
        error: null,
        isEditing: false,
        isDelete: false,
        isFetching: true
    })
}
else if (action.type === FETCH_EVENTS_DATA_SUCCESS){
return Object.assign({}, state, {
     data:  action.data,
     error: null,
     isEditing: false,
     isDelete: false,
     isFetching: false
});
} else if(action.type === FETCH_EVENTS_DATA_ERROR){
    return Object.assign({}, state, {
        error: action.error
    });

} else if(action.type=== FETCH_SINGLE_EVENT_REQUEST){
    return Object.assign({}, state, {
        isEditing: false,
        isDelete: false,
        isFetching: true
    });

}else if(action.type === FETCH_SINGLE_EVENT_DATA_SUCCESS ){
    return Object.assign({}, state, {
        isEditing: false,
        isDelete: false,
        isFetching: false,
        singleEvent: action.data
    });
} else if(action.type === FETCH_SINGLE_EVENT_FAILED){
    return Object.assign({}, state, {
        error: action.error
    });
} else if(action.type === ADD_EVENT_SUCCESSFUL){
    return Object.assign({}, state, {
        data: [...state.data, action.data]
    });
} else if(action.type === ADD_EVENT_FAILED){
    return Object.assign({}, state, {
        error: action.error
    });
}else if(action.type === DELETE_SINGLE_EVENT_REQUEST){
    return Object.assign({}, state, {
        isDelete: true,
    });
}else if(action.type === DELETE_SINGLE_EVENT_SUCCESS){
    return Object.assign({}, state, {
        isDelete: false,
        data:  [...state.data.filter(item => item._id !== action.data)]
        
    });

}else if(action.type === DELETE_SINGLE_EVENT_FAILED){
    return Object.assign({}, state, {
        error: action.error
    });
} else if(action.type=== EDIT_SINGLE_EVENT_REQUEST){
    return Object.assign({}, state, {
        isFetching: true
    });

}else if(action.type === EDIT_SINGLE_EVENT_SUCCESS ){
    return Object.assign({}, state, {
        isFetching:false,
        singleEvent: action.data
    });
} else if(action.type === EDIT_SINGLE_EVENT_FAILED){
    return Object.assign({}, state, {
        error: action.error
    });
}

return state;
}

