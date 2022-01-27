import { mockCommentPost, mockFullImage237, mockPreviewTypes } from './__mocks__/fileMock';
import { fetchImage, fetchPreview, postComment } from '../api';

describe('Api', () => {
    it('fetchImage', async () => {
        const data = await fetchPreview();
        expect(data).toStrictEqual(mockPreviewTypes);
    });
    it('fetchPreview', async () => {
        const data = await fetchImage(237);
        expect(data).toStrictEqual(mockFullImage237);
    });
    it('postComment', async () => {
      const data = await postComment(mockCommentPost);
      expect(data).toStrictEqual(204);
  });
});
