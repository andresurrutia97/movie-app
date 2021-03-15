import { formatCountry, formatYear } from '../formatData';

describe('formatData utils', () => {
  it('formatYear() should format and return just the year when full date is passed', () => {
    const date = '2020-01-01';
    const videoUrl = formatYear(date);
    expect(videoUrl).toBe('2020');
  });

  it('formatYear() should return "N/D" if no param is passed ', () => {
    const videoUrl = formatYear();
    expect(videoUrl).toBe('N/D');
  });

  it('formatCountry() should format and return the first country', () => {
    const country = [{ iso_3166_1: 'USA' }];
    const videoUrl = formatCountry(country);
    expect(videoUrl).toBe('USA');
  });

  it('formatCountry() should return "N/D" if no param is passed', () => {
    const videoUrl = formatCountry();
    expect(videoUrl).toBe('N/D');
  });
});
