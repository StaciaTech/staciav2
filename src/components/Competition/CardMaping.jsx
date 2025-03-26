import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventCard from './Event-Card';
import { useLocation, useParams } from 'react-router-dom';

const CardMapping = ({ type, main, }) => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    const location = useLocation();

    

    console.log("----------------",main, type);

    const fetchEvents = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/competition/filterEvents`, {
                params: {
                    eventTags: main,
                    date: type,
                }
            });
            console.log("Fetched events:", res.data?.docs);
            setEvents(res.data?.docs || []);
        } catch (err) {
            console.error("Error fetching event data:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            {loading ? (
                <p>Loading events...</p>
            ) : events.length > 0 ? (
                events.map(event => (
                    <EventCard 
                        key={event.id} 
                        event={event} 

                    />
                ))
            ) : (
                <p>No events available.</p>
            )}
        </div>
    );
};

export default CardMapping;
