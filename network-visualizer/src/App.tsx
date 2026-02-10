import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Sandbox from './pages/Sandbox';
import About from './pages/About';
import HowToUse from './pages/HowToUse';
import Settings from './pages/Settings';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <>
      <Sidebar />
      <div style={{ display: location.pathname === '/' ? 'block' : 'none' }}>
          <Sandbox />
      </div>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Sandbox />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-to-use" element={<HowToUse />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </>
  );
}

export default App;