import React from 'react';

import CardMapping from './CardMaping';
import { useLocation } from 'react-router-dom';

const EventFilter = () => {
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <p>{location.pathname.split("/")[2]} working</p>
            <CardMapping type={location.pathname.split("/")[3]} 
            main={location.pathname.split("/")[2]}
            />
        </div>
    );
};

export default EventFilter;