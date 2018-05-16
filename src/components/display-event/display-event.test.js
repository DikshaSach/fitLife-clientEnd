import React from 'react';
import {shallow} from 'enzyme';
import DisplayEvent from './display-event';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});
describe("Display Event component", () => {
    it("should render without throwing an error", () => {
    expect(shallow(
                <Provider store={store}>
                    <DisplayEvent />
                </Provider>
            )
   
)});
});