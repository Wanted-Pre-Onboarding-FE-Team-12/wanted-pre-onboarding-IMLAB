import loadable from '@loadable/component';
import { Navigate, Route, Routes } from 'react-router-dom';

const Home = loadable(() => import('@pages/Home'));
const NowPlaying = loadable(() => import('@pages/NowPlaying'));
const Search = loadable(() => import('@pages/Search'));
const TopRated = loadable(() => import('@pages/TopRated'));
const Upcoming = loadable(() => import('@pages/Upcoming'));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nowplaying" element={<NowPlaying />} />
        <Route path="/toprated" element={<TopRated />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
