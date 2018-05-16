import React from 'react';
import {shallow} from 'enzyme';
import Calendar from './calendar';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});
describe("Calendar component", () => {
    it("should render without throwing an error", () => {
    expect(shallow(
                <Provider store={store}>
                    <Calendar />
                </Provider>
            )
   
)});
});