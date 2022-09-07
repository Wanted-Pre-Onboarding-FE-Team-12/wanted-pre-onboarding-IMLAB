import loadable from '@loadable/component';
import { Navigate, Route, Routes } from 'react-router-dom';

const Home = loadable(() => import('@pages/Home'));
const NowPlaying = loadable(() => import('@pages/NowPlaying'));
const Search = loadable(() => import('@pages/Search'));
const TopRated = loadable(() => import('@pages/TopRated'));
const Upcoming = loadable(() => import('@pages/Upcoming'));
const Detail = loadable(() => import('@pages/Detail'));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/movie" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/movie/nowplaying" element={<NowPlaying />} />
        <Route path="/movie/toprated" element={<TopRated />} />
        <Route path="/movie/upcoming" element={<Upcoming />} />
        <Route path="/movie/search" element={<Search />} />
        <Route path="*" element={<Navigate to="/movie" replace />} />
      </Routes>
    </div>
  );
}

export default App;
