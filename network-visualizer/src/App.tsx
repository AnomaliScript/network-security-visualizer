import { useState, useCallback } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Sandbox from './pages/Sandbox';
import About from './pages/About';
import HowToUse from './pages/HowToUse';
import Settings from './pages/Settings';
import './App.css';

function App() {
  const location = useLocation();
  const isSandbox = location.pathname === '/';
  const [sandboxActive, setSandboxActive] = useState(true);

  const onNavigate = useCallback((path: string) => {
    setSandboxActive(path === '/');
  }, []);

  return (
    <>
      <Sidebar onNavigate={onNavigate} />
      <div style={{ display: isSandbox ? 'block' : 'none' }}>
          <Sandbox active={sandboxActive && isSandbox} />
      </div>
      {!isSandbox && (
        <div className="main-content">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/how-to-use" element={<HowToUse />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;