import React from 'react';
import {shallow} from 'enzyme';

import StrengthTrainingForm from './strengthTrainingForm';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});
describe("StrengthTrainingForm Component", () => {
    it("should render without throwing an error", () => {
    expect(shallow(
                <Provider store={store}>
                    <StrengthTrainingForm/>
                </Provider>
            )
   
)});
});