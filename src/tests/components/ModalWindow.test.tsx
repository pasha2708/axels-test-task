import { shallow, ShallowWrapper } from 'enzyme';

import { ModalWindow } from '../../components';
//import { mockStoreWithData } from '../__mocks__/fileMock';

let component: ShallowWrapper;
const mockUseDispatch = jest.fn();
// const setUp = () => shallow(<ModalWindow {...mockStoreWithData} />);

// // beforeEach(async () => {
//   component = await setUp();
// });

afterEach(() => {
  jest.resetAllMocks();
});

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockUseDispatch,
}));

describe('ModalWindow', () => {
  it('should take snapshot with props', () => {
    expect(component).toMatchSnapshot();
  });
});


