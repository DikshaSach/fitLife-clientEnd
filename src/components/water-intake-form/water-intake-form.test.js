import React from 'react';
import {shallow} from 'enzyme';
import WaterIntakeForm from './water-intake-form';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});
describe("WaterIntakeForm Component", () => {
    it("should render without throwing an error", () => {
    expect(shallow(
                <Provider store={store}>
                    <WaterIntakeForm/>
                </Provider>
            )
   
)});
});