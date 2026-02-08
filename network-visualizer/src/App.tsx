import { Routes, Route, NavLink } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Sandbox from './pages/Sandbox';
import About from './pages/About';
import HowToUse from './pages/HowToUse';
import Settings from './pages/Settings';

function App() {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Sandbox />} />
          <Route path="/how-to-use" element={<HowToUse />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </>
  );
}

export default App;