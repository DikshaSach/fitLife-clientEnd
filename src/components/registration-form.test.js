import React from 'react';
import {shallow} from 'enzyme';
import RegistrationForm from './registration-form';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});
describe("RegistrationForm Component", () => {
    it("should render without throwing an error", () => {
    expect(shallow(
                <Provider store={store}>
                    <RegistrationForm/>
                </Provider>
            )
   
)});
});