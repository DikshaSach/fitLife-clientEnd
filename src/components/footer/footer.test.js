import React from 'react';
import {shallow} from 'enzyme';
import Footer from './footer';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});
describe("Footer Component", () => {
    it("should render without throwing an error", () => {
    expect(shallow(
                <Provider store={store}>
                    <Footer/>
                </Provider>
            )
   
)});
});