import { MainInfo } from "./components/MainInfo/MainInfo";
import { SearchBar } from "./components/SearchBar/SearchBar";
// import bcgImage from './assets/images/earth.png';

export const App = () => {
	return (
		<div>
			<SearchBar />
			<MainInfo />
		</div>
	);
};
