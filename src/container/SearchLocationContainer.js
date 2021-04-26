import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchLocation from '../components/board/SearchLocation';

import {
  getCityName,
  getFeelLikeTemp,
  getHumidity,
  getTemp,
  getTempMax,
  getTempMin,
  getWeather,
  getWeatherIcon,
  getWindDeg,
  getWindSpeed,
  getTempDifferenceYesterday,
  getWeatherRightSmall,
  getWeatherRightMiddle,
  getWeatherRightLarge,
} from '../modules/weather';

const SearchLocationContainer = () => {
  const cityName = useSelector((state) => state.weather.cityName);
  const feelLike = useSelector((state) => state.weather.feelLike);
  const humidity = useSelector((state) => state.weather.humidity);
  const temp = useSelector((state) => state.weather.temp);
  const tempMax = useSelector((state) => state.weather.tempMax);
  const tempMin = useSelector((state) => state.weather.tempMin);
  const weatherDescription = useSelector(
    (state) => state.weather.weatherDescription
  );
  const weatherIcon = useSelector((state) => state.weather.weatherIcon);
  const windDeg = useSelector((state) => state.weather.windDeg);
  const windSpeed = useSelector((state) => state.weather.windSpeed);
  const tempDifferenceYesterday = useSelector(
    (state) => state.weather.tempDifferenceYesterday
  );
  const weatherRightSmall = useSelector(
    (state) => state.weather.weatherRightSmall
  );
  const weatherRightMiddle = useSelector(
    (state) => state.weather.weatherRightMiddle
  );
  const weatherRightLarge = useSelector(
    (state) => state.weather.weatherRightLarge
  );

  const dispatch = useDispatch();
  const getCityNameAction = useCallback((name) => dispatch(getCityName(name)), [
    dispatch,
  ]);
  const getFeelLikeTempAction = useCallback(
    (temp) => dispatch(getFeelLikeTemp(temp)),
    [dispatch]
  );
  const getHumidityAction = useCallback(
    (humidity) => dispatch(getHumidity(humidity)),
    [dispatch]
  );
  const getTempAction = useCallback((temp) => dispatch(getTemp(temp)), [
    dispatch,
  ]);
  const getTempMaxAction = useCallback(
    (tempMax) => dispatch(getTempMax(tempMax)),
    [dispatch]
  );
  const getTempMinAction = useCallback(
    (tempMin) => dispatch(getTempMin(tempMin)),
    [dispatch]
  );
  const getWeatherAction = useCallback(
    (weather) => dispatch(getWeather(weather)),
    [dispatch]
  );
  const getWeatherIconAction = useCallback(
    (weatherIcon) => dispatch(getWeatherIcon(weatherIcon)),
    [dispatch]
  );
  const getWindDegAction = useCallback(
    (windDeg) => dispatch(getWindDeg(windDeg)),
    [dispatch]
  );
  const getWindSpeedAction = useCallback(
    (windSpeed) => dispatch(getWindSpeed(windSpeed)),
    [dispatch]
  );
  const getTempDifferenceYesterdayAction = useCallback(
    (temp) => dispatch(getTempDifferenceYesterday(temp)),
    [dispatch]
  );
  const getWeatherRightSmallAction = useCallback(
    (right) => dispatch(getWeatherRightSmall(right)),
    [dispatch]
  );
  const getWeatherRightMiddleAction = useCallback(
    (right) => dispatch(getWeatherRightMiddle(right)),
    [dispatch]
  );
  const getWeatherRightLargeAction = useCallback(
    (right) => dispatch(getWeatherRightLarge(right)),
    [dispatch]
  );

  return (
    <SearchLocation
      cityName={cityName}
      feelLike={feelLike}
      humidity={humidity}
      temp={temp}
      tempMax={tempMax}
      tempMin={tempMin}
      weatherDescription={weatherDescription}
      weatherIcon={weatherIcon}
      windDeg={windDeg}
      windSpeed={windSpeed}
      tempDifferenceYesterday={tempDifferenceYesterday}
      weatherRightSmall={weatherRightSmall}
      weatherRightMiddle={weatherRightMiddle}
      weatherRightLarge={weatherRightLarge}
      getCityNameAction={getCityNameAction}
      getFeelLikeTempAction={getFeelLikeTempAction}
      getHumidityAction={getHumidityAction}
      getTempAction={getTempAction}
      getTempMaxAction={getTempMaxAction}
      getTempMinAction={getTempMinAction}
      getWeatherAction={getWeatherAction}
      getWeatherIconAction={getWeatherIconAction}
      getWindDegAction={getWindDegAction}
      getWindSpeedAction={getWindSpeedAction}
      getTempDifferenceYesterdayAction={getTempDifferenceYesterdayAction}
      getWeatherRightSmallAction={getWeatherRightSmallAction}
      getWeatherRightMiddleAction={getWeatherRightMiddleAction}
      getWeatherRightLargeAction={getWeatherRightLargeAction}
    />
  );
};

export default React.memo(SearchLocationContainer);
