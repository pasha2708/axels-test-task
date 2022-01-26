import recievePreview, { RECIEVE_PREVIEW } from './gallery';

const initialStatePreview = [
  { url: 'url', id: 123 },
  { url: 'url2', id: 1234 },
];

describe('test reducers', () => {
  it('test recievePreview', () => {
    const action = { type: RECIEVE_PREVIEW, payload: initialStatePreview };
    expect(recievePreview(, action)).toEqual(initialStatePreview)
  });
});
