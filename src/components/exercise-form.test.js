import React from 'react';
import {shallow} from 'enzyme';
import ExerciseForm from './exercise-form';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});
describe("Exercise Form Component", () => {
    it("should render without throwing an error", () => {
    expect(shallow(
                <Provider store={store}>
                    <ExerciseForm/>
                </Provider>
            )
   
)});
});