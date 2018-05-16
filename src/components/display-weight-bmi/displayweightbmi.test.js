import React from 'react';
import {shallow} from 'enzyme';
import DisplayWeightBmi from './display-weight-bmi';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});
describe("Display Weight Bmi Component", () => {
    it("should render without throwing an error", () => {
    expect(shallow(
                <Provider store={store}>
                    <DisplayWeightBmi  />
                </Provider>
            )
   
)});
});