import { AppContext } from './context/contextApi';
import Header from './components/Header';
import Feed from './components/Feed'
import SearchResult from './components/SearchResult'
import VideoDetails from './components/VideoDetails'

function App() {
  return (
    <AppContext>
      <div className="text-3xl">App</div>
    </AppContext>
  );
}

export default App;

