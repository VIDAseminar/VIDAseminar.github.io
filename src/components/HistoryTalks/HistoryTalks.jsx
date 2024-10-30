// src/components/HistoryTalks/HistoryTalks.jsx
import React from 'react';
import './HistoryTalks.css';
import { historyTalksData } from '../data'; // Assuming you have activity data in data.js

function HistoryTalks() {
    return (
        <div className="container_history">
            {historyTalksData.length === 0 ? (
                <p>No historical talk information available to display.</p>
            ) : (
                historyTalksData.map((talk, index) => (
                    <div className="event-card" key={index}>
                        <h3 className="title">{talk.title}</h3>
                        <p className="time">Time: {talk.time}</p>
                        <p className="location">Location: {talk.location}</p>
                        <div className="photos">
                            {talk.photos.map((photo, i) => (
                                <img src={photo} alt={`Photo ${i + 1}`} key={i} className="photo" />
                            ))}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default HistoryTalks;
