import { mockCommentPost, mockFullImage237, mockPreviewTypes } from './__mocks__/fileMock';
import { fetchImage, fetchPreview, postComment } from '../api';

describe('Api', () => {
    it('should return array of preview images', async () => {
        const data = await fetchPreview();
        expect(data).toStrictEqual(mockPreviewTypes);
    });
    it('should return full image with comments', async () => {
        const data = await fetchImage(237);
        expect(data).toStrictEqual(mockFullImage237);
    });
    it('should send comment to server', async () => {
      const data = await postComment(mockCommentPost);
      expect(data).toStrictEqual(204);
  });
});
