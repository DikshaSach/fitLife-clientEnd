import React from 'react';
import {shallow, mount} from 'enzyme';
import {RegistrationForm} from './registration-form';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { spy } from 'sinon';
const mockStore = configureMockStore();
const store = mockStore({});
describe("RegistrationForm Component", () => {
    it("should render without throwing an error", () => {
        const callback = spy();
        const wrapper = shallow(<RegistrationForm handleSubmit={ callback }/>);
    
    });
});