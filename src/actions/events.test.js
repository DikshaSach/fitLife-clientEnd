import  * as actions from  './events';
import {API_BASE_URL} from '../config';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('Actions', ()=>{
    it('creates fetch event success when fetching', () => {
        const id = "123";
        fetchMock
        .getOnce(`${API_BASE_URL}/exercise/` + id, {body: { events: ['do something']}, headers: {'content-type': 'application/json' } })
        const expectedActions = [
            { type: actions.FETCH_EVENTS_REQUEST},
            { type: actions.FETCH_EVENTS_DATA_SUCCESS, data: { events: ['do something'] } }
          ]
          const store = mockStore({ events: [] })

    return store.dispatch(actions.fetchEventsData(id)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
    })
    it('creates delete event success after deletion', ()=>{
        const id  = "testing";

        fetchMock
        .getOnce(`${API_BASE_URL}/exercise/delete/` + id, { headers: {'content-type': 'application/json' }} )
        const expectedActions = [
            { type: actions.DELETE_SINGLE_EVENT_REQUEST},
            { type: actions.DELETE_SINGLE_EVENT_SUCCESS, data: { events: ['do something'] } }
          ]
    })
    it('creates edit event success after editing', ()=>{
       const eventId = "123";
       const exerciseObj = {
           title: 'testing'
       }
       const action = actions.editSingleEventSuccess(eventId, exerciseObj);
       expect(action.type).toEqual(actions.EDIT_SINGLE_EVENT_SUCCESS);
    })

    it('creates add event success after adding', () =>{
        const post ={
             "_id" : "5af08e0acd00aa354cf89392",
            "title" : "testing",
            "time" : "30-minutes",
            "creator" : "5ae64682847aa30637797c96",
            "start" : "2018-05-03T04:00:00.000Z",
            "end" : "2018-05-03T04:00:00.000Z"

        }
        const action = actions.addEventsDataSuccessful(post);
        expect(action.type).toEqual(actions.ADD_EVENT_SUCCESSFUL)
        
    })


});