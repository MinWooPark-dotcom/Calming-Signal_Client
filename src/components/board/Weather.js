import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './Weather.css';
import BoardSidebar from '../BoardSidebar';
import NavContainer from '../../container/NavContainer';
import SearchLocationContainer from '../../container/SearchLocationContainer';

const Weather = ({
  cityName,
  feelLike,
  humidity,
  temp,
  tempMax,
  tempMin,
  weatherDescription,
  windDeg,
  windSpeed,
  tempDifferenceYesterday,
  weatherRightSmall,
  weatherRightMiddle,
  weatherRightLarge,
  getCityNameAction,
  getFeelLikeTempAction,
  getHumidityAction,
  getTempAction,
  getTempMaxAction,
  getTempMinAction,
  getWeatherAction,
  getWeatherIconAction,
  getWindDegAction,
  getWindSpeedAction,
  getTempDifferenceYesterdayAction,
  getWeatherRightSmallAction,
  getWeatherRightMiddleAction,
  getWeatherRightLargeAction,
  locationName,
  history,
}) => {
  const [date, setDate] = useState(null);

  const getDate = new Date();

  let getMonth = String(getDate.getMonth() + 1);
  if (getMonth.length === 1) {
    getMonth = 0 + getMonth;
  }

  let getDayNumber = String(getDate.getDate());
  if (getDayNumber.length === 1) {
    getDayNumber = 0 + getDayNumber;
  }

  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const getWeekNumber = getDate.getDay();
  const getDay = week[getWeekNumber];
  const hour = getDate.getHours();
  let min = getDate.getMinutes();
  if (min < 10) {
    min = '0' + min;
  }

  useEffect(async () => {
    try {
      if (locationName) {
        const getWeatherData = await axios.post(
          'https://server.calming-signal.ml/weather',
          {
            city: locationName,
          }
        );
        getCityNameAction(getWeatherData.data.responseData.cityName);
        getFeelLikeTempAction(getWeatherData.data.responseData.feelLike);
        getHumidityAction(getWeatherData.data.responseData.humidity);
        getTempAction(getWeatherData.data.responseData.temp);
        getTempMaxAction(getWeatherData.data.responseData.tempMax);
        getTempMinAction(getWeatherData.data.responseData.tempMin);
        getWeatherAction(getWeatherData.data.responseData.weatherDescription);
        getWeatherIconAction(
          `'http://openweathermap.org/img/wn/${getWeatherData.data.responseData.weatherIcon}@2x.png`
        );
        getWindDegAction(getWeatherData.data.responseData.windDeg);
        getWindSpeedAction(getWeatherData.data.responseData.windSpeed);
        getTempDifferenceYesterdayAction(
          getWeatherData.data.responseData.tempDifferenceYesterday
        );
        getWeatherRightSmallAction(getWeatherData.data.responseData.small);
        getWeatherRightMiddleAction(getWeatherData.data.responseData.middle);
        getWeatherRightLargeAction(getWeatherData.data.responseData.large);
        setDate(`${getMonth}.${getDayNumber}(${getDay}) ${hour}:${min}`);
      } else {
        const getWeatherData = await axios(
          'https://server.calming-signal.ml/weather'
        );
        getCityNameAction(getWeatherData.data.responseData.cityName);
        getFeelLikeTempAction(getWeatherData.data.responseData.feelLike);
        getHumidityAction(getWeatherData.data.responseData.humidity);
        getTempAction(getWeatherData.data.responseData.temp);
        getTempMaxAction(getWeatherData.data.responseData.tempMax);
        getTempMinAction(getWeatherData.data.responseData.tempMin);
        getWeatherAction(getWeatherData.data.responseData.weatherDescription);
        getWeatherIconAction(
          `'http://openweathermap.org/img/wn/${getWeatherData.data.responseData.weatherIcon}@2x.png`
        );
        getWindDegAction(getWeatherData.data.responseData.windDeg);
        getWindSpeedAction(getWeatherData.data.responseData.windSpeed);
        getTempDifferenceYesterdayAction(
          getWeatherData.data.responseData.tempDifferenceYesterday
        );
        getWeatherRightSmallAction(getWeatherData.data.responseData.small);
        getWeatherRightMiddleAction(getWeatherData.data.responseData.middle);
        getWeatherRightLargeAction(getWeatherData.data.responseData.large);
        setDate(`${getMonth}.${getDayNumber}(${getDay}) ${hour}:${min}`);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  return temp && date ? (
    <div>
      <NavContainer />
      <BoardSidebar />
      <div>
        <SearchLocationContainer />
      </div>
      <div className="Weather_pet_containter">
        <div className="Weather_pet_title">반려견 산책 적정도</div>
        <div className="Weather_pet_small_box">
          <div className="Weather_pet_small">소형견</div>
          <div className="Weather_pet_small_weather_right">
            {weatherRightSmall}
          </div>
        </div>
        <div className="Weather_pet_middle_box">
          <div className="Weather_pet_middle">중형견</div>
          <div className="Weather_pet_middle_weather_right">
            {weatherRightMiddle}
          </div>
        </div>
        <div className="Weather_pet_large_box">
          <div className="Weather_pet_large">대형견</div>
          <div className="Weather_pet_large_weather_right">
            {weatherRightLarge}
          </div>
        </div>
      </div>
      <div className="Weather_container">
        <div className="Weather_date">{date}</div>
        <div className="Weather_weather_box">
          <div className="Weather_city">{cityName}</div>
          <div className="Weather_div_weather_icon">
            <img
              className="Weather_weather_icon"
              src="http://openweathermap.org/img/wn/01n@2x.png"
              alt="date"
            />
          </div>
          <div className="Weather_weather_description">
            {weatherDescription}
          </div>
        </div>
        <div className="Weather_temp_box">
          <div className="Weather_temp">온도: {temp}</div>
          <div className="Weather_temp_celsius_icon">&#8451;</div>
          <div className="Weather_feel_like">체감({feelLike}&#8451;)</div>
          {/* 어제보다 기온 높을 때 */}
          {parseInt(tempDifferenceYesterday) < 0 ? (
            <div className="Weather_yesterday_temp">
              어제보다 {Math.abs(parseInt(tempDifferenceYesterday))}도 높아요
            </div>
          ) : null}
          {/* 어제보다 기온 낮을 때 */}
          {parseInt(tempDifferenceYesterday) > 0 ? (
            <div className="Weather_yesterday_temp">
              어제보다 {parseInt(tempDifferenceYesterday)}도 낮아요
            </div>
          ) : null}
          {/* 기온 똑같을 때 */}
          {parseInt(tempDifferenceYesterday) === 0 ? (
            <div className="Weather_yesterday_temp">
              어제와 평균 온도가 같습니다
            </div>
          ) : null}
        </div>
        <hr className="Weather_hr"></hr>
        <div className="Weather_max_min_box">
          <div className="Weather_max">최고 온도: {tempMax}&#8451;</div>
          <div className="Weather_min">최저 온도: {tempMin}&#8451;</div>
        </div>
        <div className="Weather_humidity_box">
          <div className="Weather_humidity">습도</div>
          <div className="Weather_humidity_value">{humidity}%</div>
        </div>
        <div className="Weather_wind_box">
          <div className="Weather_wind">바람</div>
          <div className="Weather_wind_speeed">속도 {windSpeed} m/s</div>
          <div className="Weather_wind_line">|</div>
          <div className="Weather_wind_deg">풍향 {windDeg}&#176;</div>
        </div>
      </div>
    </div>
  ) : (
    <div className="Weather_loading">날씨 정보를 가져오고 있습니다...</div>
  );
};

export default withRouter(Weather);
