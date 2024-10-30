// src/components/TalkOverview/TalkOverview.jsx
import React from 'react';
import './TalkOverview.css';

function TalkOverview({ talk }) {
    return (
        <div className="talk-overview">
            <h2>Recent Talk</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Date</th>
                        <td>{talk.date}</td>
                    </tr>
                    <tr>
                        <th>Time</th>
                        <td>{talk.time}</td>
                    </tr>
                    <tr>
                        <th>Location</th>
                        <td>{talk.location}</td>
                    </tr>
                    <tr>
                        <th>Speaker1</th>
                        <td>{talk.speaker1}</td>
                    </tr>
                    <tr>
                        <th>Topic1</th>
                        <td>{talk.topic1}</td>
                    </tr>
                    <tr>
                        <th>Speaker2</th>
                        <td>{talk.speaker2}</td>
                    </tr>
                    <tr>
                        <th>Topic2</th>
                        <td>{talk.topic2}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TalkOverview;
