import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './SearchLocation.css';
import axios from 'axios';

const SearchLocation = ({
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
  history,
}) => {
  const [city, setCity] = useState(null);

  const handleInputValue = (key) => (e) => {
    if (key === 'city' && e.target.value !== undefined) {
      if (e.target.value === '서울') {
        setCity('서울');
      } else if (e.target.value === '인천') {
        setCity('인천');
      } else if (e.target.value === '대전') {
        setCity('대전');
      } else if (e.target.value === '대구') {
        setCity('대구');
      } else if (e.target.value === '울산') {
        setCity('울산');
      } else if (e.target.value === '부산') {
        setCity('부산');
      } else if (e.target.value === '광주') {
        setCity('광주');
      } else if (e.target.value === '경기도') {
        setCity('경기도');
      } else if (e.target.value === '강원도') {
        setCity('강원도');
      } else if (e.target.value === '충청남도') {
        setCity('충청남도');
      } else if (e.target.value === '충청북도') {
        setCity('충청북도');
      } else if (e.target.value === '전라남도') {
        setCity('전라남도');
      } else if (e.target.value === '전라북도') {
        setCity('전라북도');
      } else if (e.target.value === '경상남도') {
        setCity('경상남도');
      } else if (e.target.value === '경상북도') {
        setCity('경상북도');
      } else if (e.target.value === '제주도') {
        setCity('제주도');
      } else {
        setCity(null);
      }
    }
  };

  const handleOnClickSearchBtn = async () => {
    const getWeatherData = await axios.post(
      'https://server.calming-signal.ml/weather',
      {
        city,
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
  };

  return (
    <div className="searchLocation_container">
      <div className="searchLocation_input_box">
        <input
          className="searchLocation_input"
          list="choices"
          placeholder="시, 도로 조회하세요"
          onChange={handleInputValue('city')}
        />
        <datalist id="choices">
          <option value="서울">서울</option>
          <option value="인천">인천</option>
          <option value="대전">대전</option>
          <option value="대구">대구</option>
          <option value="울산">울산</option>
          <option value="부산">부산</option>
          <option value="광주">광주</option>
          <option value="경기도">경기도</option>
          <option value="강원도">강원도</option>
          <option value="충청남도">충청남도</option>
          <option value="충청북도">충청북도</option>
          <option value="전라남도">전라남도</option>
          <option value="전라북도">전라북도</option>
          <option value="경상남도">경상남도</option>
          <option value="경상북도">경상북도</option>
          <option value="제주도">제주도</option>
        </datalist>

        <button className="searchLocation_btn" onClick={handleOnClickSearchBtn}>
          검색
        </button>
      </div>
    </div>
  );
};

export default withRouter(SearchLocation);
