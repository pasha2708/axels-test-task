import { shallow, ShallowWrapper } from 'enzyme';
import { Switch } from 'react-router-dom';

import { Gallery } from '../../components';
import { mockApiForGallery } from '../__mocks__/fileMock';

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

  it('should render 2 images', () => {
    expect(component.find(Switch).children()).toHaveLength(2);
  });
});
