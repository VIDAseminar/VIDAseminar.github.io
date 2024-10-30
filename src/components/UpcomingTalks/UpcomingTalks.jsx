// src/components/UpcomingTalks/UpcomingTalks.jsx
import React from 'react';
import './UpcomingTalks.css';

function UpcomingTalks({talks}) {
    return (
        <div className="upcoming-talks">
            <h2>Upcoming Events</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Location</th>
                        <th>Speaker</th>
                        <th>Topic</th>
                    </tr>
                </thead>
                <tbody>
                    {talks.map((talk, index) => (
                        <tr key={index}>
                            <td>{talk.date}</td>
                            <td>{talk.time}</td>
                            <td>{talk.location}</td>
                            <td>{talk.speaker}</td>
                            <td>{talk.topic}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UpcomingTalks;
