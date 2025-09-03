const API_KEY = 'c36d433d08d3193950535e45b632cc5d';
const BASE_URL = `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${API_KEY}&units=metric

`;

export const getWeatherData = async () => {
  const response = await fetch(BASE_URL);

  return response.json();
};
