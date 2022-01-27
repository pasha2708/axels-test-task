import { shallow, ShallowWrapper } from 'enzyme';
import { Switch } from 'react-router-dom';
import { mockApiForGallery } from '../../__mocks__/fileMock';

import Gallery from './Gallery';

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
  useSelector: () => mockApiForGallery,
}));

describe('Gallery', () => {
  it('should take snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render images', () => {
    expect(component.find(Switch).children()).toHaveLength(2);
  });
});
