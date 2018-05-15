import React from 'react';
import {shallow} from 'enzyme';
import CustomExerciseForm from './custom-exercise-form';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});
describe("Custome exercise component", () => {
    it("should render without throwing an error", () => {
    expect(shallow(
                <Provider store={store}>
                    <CustomExerciseForm />
                </Provider>
            )
   
)});
});