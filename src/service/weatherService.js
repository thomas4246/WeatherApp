import { DateTime } from 'luxon';

const API_KEY = '988299740f950d31d917c48e11e92c76';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + '/' + infoType);

  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    wind: { speed },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
  } = data;

  const { main: details, icon, description } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    speed,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    description,
  };
};
// const formatForecastWeather = (data) => {
//   let { timezone, daily, hourly } = data;
//   daily = daily.slice(1, 6).map((d) => {
//     return {
//       title: formatLocalTime(d.dt, timezone, 'ccc'),
//       temp: d.temp.day,
//       icon: d.weather[0].icon,
//     };
//   });

//   hourly = hourly.slice(1, 6).map((d) => {
//     return {
//       title: formatLocalTime(d.dt, timezone, 'hh:mm a'),
//       temp: d.temp.day,
//       icon: d.weather[0].icon,
//     };
//   });

//   return { timezone, daily, hourly };
// };

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    'weather',
    searchParams
  ).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData('onecall', {
    lat,
    lon,
    exclude: 'currrent, minutely,alerts',
    units: searchParams.units,
  });

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatLocalTime = (secs, zone, format = 't') =>
  DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const formatDay = (secs, zone, format = 'cccc') =>
  DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const formatDate = (secs, zone, format = 'd') =>
  DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const formatYear = (secs, zone, format = 'LLL yyyy') =>
  DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconsUrlfromCode = (code) =>
  `https://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatDate, formatDay, formatYear, formatLocalTime, iconsUrlfromCode };
