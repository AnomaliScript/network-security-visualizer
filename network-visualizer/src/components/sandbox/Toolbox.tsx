import React from 'react'
import { useState } from 'react';

import routerIcon from '../../assets/router.png';
import switchIcon from '../../assets/switch.png';
import accessPointIcon from '../../assets/access-point.png';
import modemIcon from '../../assets/modem.png';
import gatewayIcon from '../../assets/gateway.png';
import firewallIcon from '../../assets/firewall.png';
import serverIcon from '../../assets/server.png';
import pcIcon from '../../assets/pc.png';
import laptopIcon from '../../assets/laptop.png';
import phoneIcon from '../../assets/phone.png';
import tabletIcon from '../../assets/tablet.png';
import printerIcon from '../../assets/printer.png';
import cellTowerIcon from '../../assets/cell-tower.png';
import carrierCoreIcon from '../../assets/carrier-core.png';
import landlineIcon from '../../assets/landline.png';

interface ToolboxProps {
    onAddNode: (type: string, count: number) => void;
}

const devices = [
    { name: 'Router', icon: routerIcon },
    { name: 'Switch', icon: switchIcon },
    { name: 'Access Point', icon: accessPointIcon },
    { name: 'Modem', icon: modemIcon },
    { name: 'Gateway', icon: gatewayIcon },
    { name: 'Firewall', icon: firewallIcon },
    { name: 'Server', icon: serverIcon },
    { name: 'PC', icon: pcIcon },
    { name: 'Laptop', icon: laptopIcon },
    { name: 'Phone', icon: phoneIcon },
    { name: 'Tablet', icon: tabletIcon },
    { name: 'Printer', icon: printerIcon },
    { name: 'Cell Tower', icon: cellTowerIcon },
    { name: 'Carrier Core', icon: carrierCoreIcon },
    { name: 'Landline', icon: landlineIcon }
];

function Toolbox({ onAddNode }: ToolboxProps) {
    const [counts, setCounts] = useState<Record<string, number>>({});

    const handleAdd = (device: string) => {
        const newCount = (counts[device] || 0) + 1;
        setCounts({ ...counts, [device]: newCount });
        onAddNode(device, newCount);
    };

    return (
        <div className="toolbox">
            <div className="tb-container">
                {devices.map((device) => (
                    <button key={device.name} onClick={() => handleAdd(device.name)}>
                        <img src={device.icon} alt={device.name} width={40} height={40} />
                        {device.name}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Toolbox;