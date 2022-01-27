import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe("Header component", () => {
  it("should render Header", () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
});
