import React from 'react';
import {shallow} from 'enzyme';
import HomepageInfo from './homepage-info';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});
describe("HomepageInfo Component", () => {
    it("should render without throwing an error", () => {
    expect(shallow(
                <Provider store={store}>
                    <HomepageInfo/>
                </Provider>
            )
   
)});
});