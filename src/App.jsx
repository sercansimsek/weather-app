import { useEffect, useState } from 'react';

import { FiveDayCard } from './components/5DayCard/FiveDayCard';
import { DailyCard } from './components/DailyCard/DailyCard';
import { MainInfo } from './components/MainInfo/MainInfo';
import { OtherCities } from './components/OtherCities/OtherCities';
import { SearchBar } from './components/SearchBar/SearchBar';
// import bcgImage from './assets/images/earth.png';
const API_KEY = 'c36d433d08d3193950535e45b632cc5d';

export const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [query, setQuery] = useState('London');

  const BASE_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${API_KEY}&units=metric
`;

  const getWeatherData = async () => {
    const response = await fetch(BASE_URL);

    return response.json();
  };

  const loadWeatherData = async () => {
    try {
      const data = await getWeatherData();
      setWeatherData(data.list);
    } catch (error) {
      setErrorMessage('Failed to fetch weather data');
      console.error(errorMessage, error);
    }
  };

  useEffect(() => {
    loadWeatherData();
  }, [query]);

  console.log(weatherData);

  return (
    <div className="grid grid-cols-1 gap-10 bg-[url('../src/assets/images/earth.png')] object-cover bg-cover bg-no-repeat bg-[#030616] px-6 py-7 w-full min-h-screen md:grid-cols-2">
      <div className="md:col-span-2">
        <SearchBar query={query} onSetQuery={setQuery} />
      </div>
      <MainInfo weatherData={weatherData} query={query}/>
      <DailyCard />
      <div className="md:order-last">
        <FiveDayCard />
      </div>
      <OtherCities />
    </div>
  );
};
