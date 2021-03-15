import { getImageUrl, getTrailerUrl } from '../urls';

describe('urls utils', () => {
  it('should return a video trailer url when video key is passed', () => {
    const expectedUrl = 'https://www.youtube.com/watch?v=546';
    const videos = { results: [{ key: 546 }] };
    const videoUrl = getTrailerUrl(videos);

    expect(videoUrl).toBe(expectedUrl);
  });

  it('should return the image url when image path is passed', () => {
    const expectedUrl = 'https://image.tmdb.org/t/p/original/546';
    const imgUrl = getImageUrl('/546');

    expect(imgUrl).toBe(expectedUrl);
  });
});
