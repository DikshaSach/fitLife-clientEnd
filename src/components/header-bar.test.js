import React from 'react';
import {shallow} from 'enzyme';
import HeaderBar from './header-bar';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});
describe("HeaderBar Component", () => {
    it("should render without throwing an error", () => {
    expect(shallow(
                <Provider store={store}>
                    <HeaderBar/>
                </Provider>
            )
   
)});
});