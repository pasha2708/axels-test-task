import { shallow } from 'enzyme';

import App from '../App';

describe("App component", () => {
  it("should render App", () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});
