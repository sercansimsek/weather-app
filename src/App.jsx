import { FiveDayCard } from './components/5DayCard/FiveDayCard';
import { DailyCard } from './components/DailyCard/DailyCard';
import { MainInfo } from './components/MainInfo/MainInfo';
import { OtherCities } from './components/OtherCities/OtherCities';
import { SearchBar } from './components/SearchBar/SearchBar';
// import bcgImage from './assets/images/earth.png';

export const App = () => {
  return (
    <div className="grid grid-cols-1 gap-10 bg-[url('../src/assets/images/earth.png')] object-cover bg-cover bg-no-repeat bg-[#030616] px-6 py-7 w-full min-h-screen md:grid-cols-2">
      <div className="md:col-span-2">
        <SearchBar />
      </div>
      <MainInfo />
      <DailyCard />
      <div className='md:order-last'>
        <FiveDayCard />
      </div>
      <OtherCities />
    </div>
  );
};
