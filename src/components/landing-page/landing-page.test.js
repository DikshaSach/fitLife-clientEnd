import React from 'react';
import {shallow} from 'enzyme';
import LandingPage from './landing-page';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { Redirect } from "react-router-dom";
const mockStore = configureMockStore();
const store = mockStore({});
describe("LandingPage Component", () => {
    it("should render without throwing an error", () => {
   const wrapper = shallow(
                <Provider store={store}>
                    <LandingPage/>
                </Provider>
            )
            expect(wrapper.find("div.homepage-container")).toBeDefined();
    })
    it("Should redirect if user has authToken", () => {
        const wrapper = shallow(<Provider store={store}>
                                <LandingPage authToken={"ABCD"} />
                                </Provider>);

    expect(wrapper.find(".homepage-container")).toHaveLength(0);
    });

});