import React from 'react';
import { shallow, mount } from 'enzyme';
import CustomExerciseForm from './custom-exercise-form';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const dispatch = jest.fn();
const handleSubmit = jest.fn();
const onSubmit = jest.fn();
const initProps = {
  onSubmit,
};

const mockStore = configureMockStore();
const store = mockStore({});
describe("Custom exercise component", () => {
    it("should render without throwing an error", () => {
    expect(shallow(
                <Provider store={store}>
                    <CustomExerciseForm />
                </Provider>
            )
            
   
    )})

});