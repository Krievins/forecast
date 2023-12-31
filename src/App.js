// Style
import './css/style.scss';

// Components
import { Search } from './components/search/Search';
import CurrentWeather from './components/current-weather/current-weather';

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
    <div className="container">
        <Search onSearchChange={handleOnSearchChange} />
        <CurrentWeather />
    </div>
  );
}

export default App;
