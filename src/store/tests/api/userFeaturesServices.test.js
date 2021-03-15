import axios from 'axios';
import {
  getFavoritesMoviesList,
  getSeenMoviesList,
  addFavoriteMovie,
  addSeenMovie,
  removeFavoriteMovie,
} from '../../api/userFeaturesServices';

jest.mock('axios');

describe('user Api services', () => {
  const data = ['some data'];

  beforeEach(() => {
    axios.get.mockResolvedValue(data);
    axios.patch.mockResolvedValue(data);
    axios.delete.mockResolvedValue(data);
  });

  it('should return data as a result from getFavoritesMoviesList()', async () => {
    const infoMovie = await getFavoritesMoviesList();
    expect(infoMovie).toBe(data);
  });

  it('should return data as a result from getSeenMoviesList()', async () => {
    const infoMovie = await getSeenMoviesList();
    expect(infoMovie).toBe(data);
  });

  it('should return data as a result from addFavoriteMovie()', async () => {
    const addRes = await addFavoriteMovie();
    expect(addRes).toBe(data);
  });

  it('should return data as a result from addSeenMovie()', async () => {
    const addRes = await addSeenMovie();
    expect(addRes).toBe(data);
  });

  it('should return data as a result from removeFavoriteMovie()', async () => {
    const removeRes = await removeFavoriteMovie();
    expect(removeRes).toBe(data);
  });
});
