import { shallow, ShallowWrapper } from 'enzyme';
import { Switch } from 'react-router-dom';

import Gallery from './Gallery';

const mockAPI = {
  images: [
    {
      id: 123,
      url: 'fakeURL/',
    },
    {
      id: 321,
      url: 'fakeURL2/',
    },
  ],
};

let component: ShallowWrapper;
const mockUseDispatch = jest.fn();
const setUp = () => shallow(<Gallery />);

beforeEach(async () => {
  component = await setUp();
});

afterEach(() => {
  jest.resetAllMocks();
});

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockUseDispatch,
  useSelector: () => mockAPI,
}));

describe('Gallery', () => {
  it('should take snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render images', () => {
    expect(component.find(Switch).children()).toHaveLength(2);
  });
});
