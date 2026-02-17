import React from 'react'
import './Pages.css';

interface SettingsProps {
    descEnable: boolean;
    setDescEnable: (val: boolean) => void;
    particlesEnabled: boolean;
    setParticlesEnabled: (val: boolean) => void;
}

function Settings({ descEnable, setDescEnable, particlesEnabled, setParticlesEnabled }: SettingsProps) {
    return (
        <div className="page">
            <h1>Settings</h1>
            <p>This is the settings page for NetworkSV.</p>
            <button onClick={() => setParticlesEnabled(!particlesEnabled)}>
                Moving Background: {particlesEnabled ? 'ON' : 'OFF'}
            </button>
            <button onClick={() => setDescEnable(!descEnable)}>
                Descriptions: {descEnable ? 'ON' : 'OFF'}
            </button>
        </div>
    );
}

export default Settings;