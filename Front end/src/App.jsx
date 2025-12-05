import GamePlay from './components/gameplay/main';
import { Route, Routes } from 'react-router-dom';
import Settings from './components/settings/settings';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Settings/>}/>
      <Route path="/play" element={<GamePlay />} />
      <Route path="/play/:category/:difficulty" element={<GamePlay />} />
    </Routes>
  );
};

export default App;
