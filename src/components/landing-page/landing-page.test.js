import React from 'react';
import {shallow} from 'enzyme';
import LandingPage from './landing-page';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});
describe("LandingPage Component", () => {
    it("should render without throwing an error", () => {
    expect(shallow(
                <Provider store={store}>
                    <LandingPage/>
                </Provider>
            )
   
)});
});