import  * as actions from  './weightbmi';
import {API_BASE_URL} from '../config';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Water Actions', ()=>{

    it('creates fetch weightbmi success when fetching', () => {
        const id = "123";
        fetchMock
        .getOnce(`${API_BASE_URL}/weightandbmi/` + id , {body: { weightbmi: ['weight']}, headers: {'content-type': 'application/json' } })
        const expectedActions = [
            { type: actions.FETCH_WEIGHTBMI_REQUEST, },
            { type: actions.FETCH_WEIGHTBMI_SUCCESS, data: { weightbmi: ['weight'] },"type": "FETCH_WEIGHTBMI_SUCCESS"}
          ]
          const store = mockStore({ weightbmi: [] })

    return store.dispatch(actions.fetchWeightBmi(id)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
    });
    it('Should delete call upon deleteWeightBmiSuccess()', () => {
        const id = "123";
        const action = actions.deleteWeightBmiSuccess(id); 
        expect(action.type).toEqual(actions.DELETE_WEIGHTBMI_SUCCESS);
    })
    it("Should return addWeightBmi", () => {
        const values = {
            weight : 90,
            bmi : 20,
            creator : "5ae530943a6d5402e6602594",
            month : "February",
        };
        const action = actions.addWeightBmiSuccessful(values);

        expect(action.type).toEqual(actions.ADD_WEIGHTBMI_SUCCESSFUL);
    });
  
});