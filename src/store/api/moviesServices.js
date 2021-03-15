import axiosInstance from '../../axios';

export const getMovie = async (id) => {
  return axiosInstance
    .get(`/movie/${id}?append_to_response=images,videos`)
    .then((res) => res);
};

export const getPopularMovies = async () => {
  return axiosInstance.get('/movie/popular').then((res) => res);
};

export const getTopRatedMovies = async () => {
  return axiosInstance.get('/movie/top_rated').then((res) => res);
};
