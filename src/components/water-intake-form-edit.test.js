import React from 'react';
import {shallow} from 'enzyme';
import WaterIntakeFormEdit from './water-intake-form-edit';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});
describe("WaterIntakeFormEdit Component", () => {
    it("should render without throwing an error", () => {
    expect(shallow(
                <Provider store={store}>
                    <WaterIntakeFormEdit/>
                </Provider>
            )
   
)});
});