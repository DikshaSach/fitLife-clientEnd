import React from 'react';
import {shallow, mount} from 'enzyme';
import EditForm from './edit-form';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});
describe("Edit Form Component", () => {
    it("should render without throwing an error", () => {
    expect(shallow(
                <Provider store={store}>
                    <EditForm  />
                </Provider>
            )
   
)});


});