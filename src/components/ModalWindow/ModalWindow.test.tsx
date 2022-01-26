import { shallow, ShallowWrapper } from 'enzyme';
import { ModalWindow } from '..';

const props = {
  data: {
    images: [],
    fullImage:{
      id: 123,
      url: 'url',
      comments: [{
        id: 321,
        date: 1529500027127,
        text: 'nice photo'
      },
      {
        id: 123,
        date: 1529500027128,
        text: 'nice photo2'
      }]
    },
    isLoaded: true,
  },
  
  id: 123
}

let component: ShallowWrapper;
const mockUseDispatch = jest.fn();
const setUp = () => shallow(<ModalWindow {...props} />);

beforeEach(async () => {
  component = await setUp();
});

afterEach(() => {
  jest.resetAllMocks();
});

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockUseDispatch,
}));

describe('ModalWindow', () => {
  it('should take snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  // it('should render images', () => {
  //   expect(component.find(Switch).children()).toHaveLength(2);
  // });
});


