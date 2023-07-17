// Style
import './css/style.scss';

// Components
import { Search } from './components/search/Search';

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
    <div className="container">
        <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
