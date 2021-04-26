import { createAction, handleActions } from 'redux-actions';

// action

const GET_CITY_NAME = 'weather/GET_CITY_NAME';
const GET_FEEL_LIKE_TEMP = 'weather/GET_FELL_LIKE_TEMP';
const GET_HUMIDITY = 'weather/GET_HUMIDITY';
const GET_TEMP = 'weather/GET_TEMP';
const GET_TEMP_MAX = 'weather/GET_TEMP_MAX';
const GET_TEMP_MIN = 'weather/GET_TEMP_MIN';
const GET_WEATHER = 'weather/GET_WEATHER';
const GET_WEATHER_ICON = 'weather/GET_WEATHER_ICON';
const GET_WIND_DEG = 'weather/GET_WIND_DEG';
const GET_WIND_SPEED = 'weather/GET_WIND_SPEED';
const GET_TEMP_DIFFERENCE_YESTERDAY = 'weather/GET_TEMP_DIFFERENCE_YESTERDAY';
const GET_WEATHER_RIGHT_SMALL = 'weather/GET_WEATHER_RIGHT_SMALL';
const GET_WEATHER_RIGHT_MIDDLE = 'weather/GET_WEATHER_RIGHT_MIDDLE';
const GET_WEATHER_RIGHT_LARGE = 'weather/GET_WEATHER_RIGHT_LARGE';

// action creator

export const getCityName = createAction(GET_CITY_NAME);
export const getFeelLikeTemp = createAction(GET_FEEL_LIKE_TEMP);
export const getHumidity = createAction(GET_HUMIDITY);
export const getTemp = createAction(GET_TEMP);
export const getTempMax = createAction(GET_TEMP_MAX);
export const getTempMin = createAction(GET_TEMP_MIN);
export const getWeather = createAction(GET_WEATHER);
export const getWeatherIcon = createAction(GET_WEATHER_ICON);
export const getWindDeg = createAction(GET_WIND_DEG);
export const getWindSpeed = createAction(GET_WIND_SPEED);
export const getTempDifferenceYesterday = createAction(
  GET_TEMP_DIFFERENCE_YESTERDAY
);
export const getWeatherRightSmall = createAction(GET_WEATHER_RIGHT_SMALL);
export const getWeatherRightMiddle = createAction(GET_WEATHER_RIGHT_MIDDLE);
export const getWeatherRightLarge = createAction(GET_WEATHER_RIGHT_LARGE);

const initialState = {
  cityName: null,
  feelLike: null,
  humidity: null,
  temp: null,
  tempMax: null,
  tempMin: null,
  weatherDescription: null,
  weatherIcon: null,
  windeDeg: null,
  windSpeed: null,
  tempDifferenceYesterday: null,
  weatherRightSmall: null,
  weatherRightMiddle: null,
  weatherRightLarge: null,
};

// reducer
const weather = handleActions(
  {
    [GET_CITY_NAME]: (state, { payload: cityName }) => ({
      ...state,
      cityName: cityName,
    }),
    [GET_FEEL_LIKE_TEMP]: (state, { payload: temp }) => ({ ...state, temp }),
    [GET_HUMIDITY]: (state, { payload: humidity }) => ({ ...state, humidity }),
    [GET_TEMP]: (state, { payload: temp }) => ({ ...state, temp }),
    [GET_TEMP_MAX]: (state, { payload: tempMax }) => ({ ...state, tempMax }),
    [GET_TEMP_MIN]: (state, { payload: tempMin }) => ({ ...state, tempMin }),
    [GET_WEATHER]: (state, { payload: weatherDescription }) => ({
      ...state,
      weatherDescription,
    }),
    [GET_WEATHER_ICON]: (state, { payload: weatherIcon }) => ({
      ...state,
      weatherIcon,
    }),
    [GET_WIND_DEG]: (state, { payload: windDeg }) => ({ ...state, windDeg }),
    [GET_WIND_SPEED]: (state, { payload: windSpeed }) => ({
      ...state,
      windSpeed,
    }),
    [GET_TEMP_DIFFERENCE_YESTERDAY]: (
      state,
      { payload: tempDifferenceYesterday }
    ) => ({ ...state, tempDifferenceYesterday }),
    [GET_WEATHER_RIGHT_SMALL]: (state, { payload: weatherRightSmall }) => ({
      ...state,
      weatherRightSmall,
    }),
    [GET_WEATHER_RIGHT_MIDDLE]: (state, { payload: weatherRightMiddle }) => ({
      ...state,
      weatherRightMiddle,
    }),
    [GET_WEATHER_RIGHT_LARGE]: (state, { payload: weatherRightLarge }) => ({
      ...state,
      weatherRightLarge,
    }),
  },
  initialState
);

export default weather;
