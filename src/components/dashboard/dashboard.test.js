import React from 'react';
import {shallow} from 'enzyme';
import {Dashboard} from './dashboard';
import { Provider } from "react-redux";
import { spy } from 'sinon';
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});
describe("Dashboard component", () => {
    it("should render without throwing an error", () => {
        const callback = spy();
        expect(shallow(<Dashboard dispatch= {callback}/>)
    )});
});