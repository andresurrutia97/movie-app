import { createMemoryHistory } from 'history';
import { goToMovie } from '../navigation';

describe('Navigation util', () => {
  it('goToMovie() should call the history push function with the params given', () => {
    const history = createMemoryHistory();
    jest.spyOn(history, 'push');
    goToMovie(history, 123);

    expect(history.location).toEqual(
      expect.objectContaining({
        pathname: '/movie/123',
      })
    );
    expect(history.push).toBeCalledTimes(1);
  });
});
