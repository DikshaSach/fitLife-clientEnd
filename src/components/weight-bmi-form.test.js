import React from 'react';
import {shallow} from 'enzyme';
import WeightBmiForm from './weight-bmi-form';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});
describe("WeightBmiForm Component", () => {
    it("should render without throwing an error", () => {
    expect(shallow(
                <Provider store={store}>
                    <WeightBmiForm/>
                </Provider>
            )
   
)});
});