import { shallow, ShallowWrapper } from 'enzyme';
import { Footer } from '../index';

let component: ShallowWrapper;
const setUp = () => shallow(<Footer />);

beforeEach(() => {
  component = setUp();
});

describe('Footer component', () => {
  it('should render Footer', () => {
    expect(component).toMatchSnapshot();
  });
});
