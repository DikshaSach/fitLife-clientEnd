import React from 'react';
import {shallow} from 'enzyme';
import DisplayWater from './display-water';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});
describe("Display Water Component", () => {
    it("should render without throwing an error", () => {
    expect(shallow(
                <Provider store={store}>
                    <DisplayWater />
                </Provider>
            )
   
)});
});