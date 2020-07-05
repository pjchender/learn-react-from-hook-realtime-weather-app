import React, { useState } from 'react';

import { availableLocations } from './../utils/helpers';
import styled from '@emotion/styled';

const WeatherSettingWrapper = styled.div`
  position: relative;
  min-width: 360px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.foregroundColor};
  box-sizing: border-box;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 28px;
  color: ${({ theme }) => theme.titleColor};
  margin-bottom: 30px;
`;

const StyledLabel = styled.label`
  display: block;
  font-size: 16px;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 15px;
`;

const StyledSelect = styled.select`
  display: block;
  box-sizing: border-box;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.textColor};
  outline: none;
  width: 100%;
  max-width: 100%;
  color: ${({ theme }) => theme.textColor};
  font-size: 16px;
  padding: 7px 10px;
  margin-bottom: 40px;
  -webkit-appearance: none;
  -moz-appearance: none;
  box-shadow: none;
  outline: 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    user-select: none;
    margin: 0;
    letter-spacing: 0.3px;
    line-height: 1;
    cursor: pointer;
    overflow: visible;
    text-transform: none;
    border: 1px solid transparent;
    background-color: transparent;
    height: 35px;
    width: 80px;
    border-radius: 5px;
    font-size: 14px;

    &:focus,
    &.focus {
      outline: 0;
      box-shadow: none;
    }

    &::-moz-focus-inner {
      padding: 0;
      border-style: none;
    }
  }
`;

const Back = styled.button`
  && {
    color: ${({ theme }) => theme.textColor};
    border-color: ${({ theme }) => theme.textColor};
  }
`;

const Save = styled.button`
  && {
    color: white;
    background-color: #40a9f3;
  }
`;

const WeatherSetting = ({
  cityName,
  handleCurrentCityChange,
  handleCurrentPageChange,
}) => {
  const [locationName, setLocationName] = useState(cityName);

  const handleChange = (e) => {
    setLocationName(e.target.value);
  };

  const handleSave = () => {
    console.log(`儲存的地區資訊為：${locationName}`);
    handleCurrentCityChange(locationName);
    handleCurrentPageChange('WeatherCard');
    localStorage.setItem('cityName', locationName);
  };

  return (
    <WeatherSettingWrapper>
      <Title>設定</Title>
      <StyledLabel htmlFor="location">地區</StyledLabel>

      <StyledSelect
        id="location"
        name="location"
        onChange={handleChange}
        value={locationName}
      >
        {availableLocations.map(({ cityName }) => (
          <option value={cityName} key={cityName}>
            {cityName}
          </option>
        ))}
      </StyledSelect>

      <ButtonGroup>
        <Back onClick={() => handleCurrentPageChange('WeatherCard')}>返回</Back>
        <Save onClick={handleSave}>儲存</Save>
      </ButtonGroup>
    </WeatherSettingWrapper>
  );
};

export default WeatherSetting;
