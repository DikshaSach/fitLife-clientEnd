import React from 'react';
import {shallow, mount} from 'enzyme';
import {HomepageInfo} from './homepage-info';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});
describe("HomepageInfo Component", () => {
    it("should render without throwing an error", () => {
    expect(shallow( <HomepageInfo/>)
   
    )}) 
    it('should have an info div container', () => {
        const wrapper = mount(<HomepageInfo/>);
       expect(wrapper.find('div.container-for-info-divs')).toHaveLength(1)
    })

});