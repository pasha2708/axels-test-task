import axios from 'axios';

import { fetchPreview } from './api';

jest.mock('axios', () => jest.fn(() => Promise.resolve('test')));

describe('Client', () => {
  it('should call axios and return a response', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
  });
});