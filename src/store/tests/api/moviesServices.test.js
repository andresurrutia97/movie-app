import {
  getMovie,
  getPopularMovies,
  getTopRatedMovies,
} from '../../api/moviesServices';
import axiosInstance from '../../../axios';

jest.mock('../../../axios');

describe('movies Api services', () => {
  const data = ['some data'];

  beforeEach(() => {
    axiosInstance.get.mockResolvedValue(data);
  });

  it('should return data as a result from getPopularMovies()', async () => {
    const infoMovie = await getPopularMovies();
    expect(infoMovie).toBe(data);
  });

  it('should return data as a result from getTopRatedMovies()', async () => {
    const infoMovie = await getTopRatedMovies();
    expect(infoMovie).toBe(data);
  });

  it('should return data as a result from getMovie()', async () => {
    const infoMovie = await getMovie();
    expect(infoMovie).toBe(data);
  });
});
