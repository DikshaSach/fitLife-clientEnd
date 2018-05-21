import  * as actions from  './water';
import {API_BASE_URL} from '../config';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('Water Actions', ()=>{

    it('creates fetch event success when fetching', () => {
        const id = "123";
        fetchMock
        .getOnce(`${API_BASE_URL}/water/waterintake/all/` + id , {body: { water: ['water data']}, headers: {'content-type': 'application/json' } })
        const expectedActions = [
            { type: actions.FETCH_ALL_WATER_REQUEST, },
            { type: actions.FETCH_ALL_WATER_SUCCESS, data: { water: ['water data'] },"type": "FETCH_ALL_WATER_SUCCESS"}
          ]
          const store = mockStore({ water: [] })

    return store.dispatch(actions.fetchAllWaterDates(id)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
    })
    it('creates fetch event success when fetching', () => {
        const idDate = "01012018";
        fetchMock
        .getOnce(`${API_BASE_URL}/water/waterintake/` + idDate , {body: { water: ['water data']}, headers: {'content-type': 'application/json' } })
        const expectedActions = [
            { type: actions.FETCH_WATER_REQUEST, },
            { type: actions.FETCH_WATER_SUCCESS, data: { water: ['water data'] },"type": "FETCH_WATER_SUCCESS"}
          ]
          const store = mockStore({ water: [] })

    return store.dispatch(actions.fetchWater(idDate)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
    })
    it('creates edit water success action after editing', ()=>{
       const water = {
           waterintake: "5"
       }
        const action = actions.editWaterSuccessful(water);
        expect(action.type).toEqual(actions.EDIT_WATER_SUCCESSFUL);
     })
   
});