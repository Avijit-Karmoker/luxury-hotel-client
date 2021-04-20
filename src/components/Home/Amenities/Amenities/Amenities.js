import React from 'react';
import parkings from '../../../../images/parking.png';
import browser from '../../../../images/browser.png';
import wifi from '../../../../images/wifi.png';
import elevators from '../../../../images/elevator.png';
import meeting from '../../../../images/meeting.png';
import laundry from '../../../../images/washing-machine.png'
import Amenitie from '../Amenitie/Amenitie';
import './Amenities.css';

const Amenities = () => {
    const facilities = [
        {
            logo: parkings,
            name: 'Free Self-Parking',
            quote: 'A hotel is an establishment that provides paid loading on a short-term basis. Facilities Provided may range from modest-quality'
        },
        {
            logo: browser,
            name: 'High speed Internet access',
            quote: 'A hotel is an establishment that provides paid loading on a short-term basis. Facilities Provided may range from modest-quality'
        },
        {
            logo: wifi,
            name: 'Complimentary WiFi in public ares',
            quote: 'A hotel is an establishment that provides paid loading on a short-term basis. Facilities Provided may range from modest-quality'
        },
        {
            logo: elevators,
            name: 'Elevators',
            quote: 'A hotel is an establishment that provides paid loading on a short-term basis. Facilities Provided may range from modest-quality'
        },
        {
            logo: meeting,
            name: 'Meeting rooms',
            quote: 'A hotel is an establishment that provides paid loading on a short-term basis. Facilities Provided may range from modest-quality'
        },
        {
            logo: laundry,
            name: 'Laundry and Valet service',
            quote: 'A hotel is an establishment that provides paid loading on a short-term basis. Facilities Provided may range from modest-quality'
        },
    ]
    return (
        <section className="amenities">
            <h1 className="text-center" style={{fontSize: '55px'}}>Hotel Amenities</h1>
            <div className="hr"></div>
            <div className="row containers">
                {
                    facilities.map(facility => <Amenitie facility={facility}></Amenitie>)
                }
            </div>
        </section>
    );
};

export default Amenities;