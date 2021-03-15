const notDefinded = 'N/D';

export const formatYear = (year, defaultValue = notDefinded) =>
  year?.split('-')[0] || defaultValue;

export const formatCountry = (country, defaultValue = notDefinded) =>
  country ? country[0]?.iso_3166_1 : defaultValue;
