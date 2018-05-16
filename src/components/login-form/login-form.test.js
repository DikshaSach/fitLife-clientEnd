import React from 'react';
import {shallow} from 'enzyme';
import LoginForm from './login-form';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});
describe("LoginForm Component", () => {
    it("should render without throwing an error", () => {
    expect(shallow(
                <Provider store={store}>
                    <LoginForm/>
                </Provider>
            )
   
)});
});