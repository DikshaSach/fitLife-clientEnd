import  * as actions from  './auth';
import {API_BASE_URL} from '../config';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('Auth Actions', () =>{
    it('should return the authRequest() action', () => {
        const action = actions.authRequest()
        expect(action.type).toEqual(actions.AUTH_REQUEST)
      })
      it('should return the authSuccess action', () => {
        const newUser = 'hiThere'
        const action = actions.authSuccess(newUser)
        expect(action.type).toEqual(actions.AUTH_SUCCESS)
        expect(action.currentUser).toEqual(newUser)
      })
      it('should return the authError action', () => {
        const err = 'oops'
        const action = actions.authError(err)
        expect(action.type).toEqual(actions.AUTH_ERROR)
        expect(action.error).toEqual(err)
      })
      it('should set the auth token', () => {
        const authToken = 123
        const action = actions.setAuthToken(authToken)
        expect(action.type).toEqual(actions.SET_AUTH_TOKEN)
        expect(action.authToken).toEqual(authToken)
      })
      it('should return the clearAuth() action', () => {
        const action = actions.clearAuth()
        expect(action.type).toEqual(actions.CLEAR_AUTH)
      })
});