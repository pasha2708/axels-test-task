import { shallow, ShallowWrapper } from 'enzyme';

import { Footer } from '../../components';

let component: ShallowWrapper;
const setUp = () => shallow(<Footer />);

beforeEach(() => {
  component = setUp();
});

describe('Footer component', () => {
  it('should render Footer and take snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
