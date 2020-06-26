import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  background-color: #ededed;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WeatherCard = styled.div`
  position: relative;
  min-width: 360px;
  box-shadow: 0 1px 3px 0 #999999;
  background-color: #f9f9f9;
  box-sizing: border-box;
  padding: 30px 15px;
`;

function App() {
  return (
    <Container>
      <WeatherCard>
        <h1>Weather</h1>
      </WeatherCard>
    </Container>
  );
}

export default App;
