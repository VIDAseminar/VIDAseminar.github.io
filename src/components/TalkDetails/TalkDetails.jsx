// src/components/TalkDetails/TalkDetails.jsx
import React from 'react';
import './TalkDetails.css';

function TalkDetails({ details }) {
    return (
        <div className="talk-details">
            <h2>Talk Details</h2>
            <div className="poster">
                <img src={details.image1} alt={`${details.researcher1}'s portrait`} className="speaker-photo" />
                <div className="details">
                    <h3>{details.title1}</h3>
                    <p className="researcher">{details.researcher1}</p>
                    <p className="abstract">{details.abstract1}</p>
                </div>
            </div>
            <div className="poster">
                <img src={details.image1} alt={`${details.researcher1}'s portrait`} className="speaker-photo" />
                <div className="details">
                    <h3>{details.title1}</h3>
                    <p className="researcher">{details.researcher1}</p>
                    <p className="abstract">{details.abstract1}</p>
                </div>
            </div>
            
        </div>
    );
}

export default TalkDetails;
