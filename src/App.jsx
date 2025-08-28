import { FiveDayCard } from "./components/5DayCard/FiveDayCard";
import { DailyCard } from "./components/DailyCard/DailyCard";
import { MainInfo } from "./components/MainInfo/MainInfo";
import { OtherCities } from "./components/OtherCities/OtherCities";
import { SearchBar } from "./components/SearchBar/SearchBar";
// import bcgImage from './assets/images/earth.png';

export const App = () => {
	return (
		<div>
			<SearchBar />
			<MainInfo />
      <DailyCard />
      <FiveDayCard />
      <OtherCities />
		</div>
	);
};
