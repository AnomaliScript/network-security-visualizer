import React from 'react';
import './Pages.css';
import h2u_1 from '../assets/h2u-1.png';

function HowToUse() {
    return (
        <div className="page">
            <h1>How to Use NetworKitchen</h1>
            <p>This is the how to use page for NetworKitchen.</p>
            <img src={h2u_1} alt="Example diagram for a network involving multiple components" />
            <p>
                There are many network devices that can be used, all of which can be found in the top bar of the Sandbox page. <br />
                Network devices can be connected through clicking and dragging their connection points, which are the small circles on the sides of each component. <br />
                Clicking on a network device will show what the device is and its details. <br />
                Types of connections between network devices will be shown once made. <br />
            </p>
        </div>
    );
}

export default HowToUse;