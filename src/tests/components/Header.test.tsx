import { shallow } from 'enzyme';

import { Header } from '../../components';

describe("Header component", () => {
  it("should render Header and take snapshot", () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
});
