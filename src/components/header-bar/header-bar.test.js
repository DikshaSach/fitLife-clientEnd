import React from 'react';
import {shallow, mount} from 'enzyme';
import {HeaderBar} from './header-bar';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});
describe("HeaderBar Component", () => {
    it("should render without throwing an error", () => {
    expect(shallow(<HeaderBar/>)
   
    )})
    it('should have an header bar container', () => {
        const wrapper = mount(<HeaderBar/>);
       expect(wrapper.find('div.navNarrow')).toHaveLength(1)
    })
});