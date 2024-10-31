// src/components/Home/Home.jsx
import React from 'react';
import TalkOverview from '../TalkOverview/TalkOverview';
import TalkDetails from '../TalkDetails/TalkDetails';
import UpcomingTalks from '../UpcomingTalks/UpcomingTalks';
import { nextTalk, talkDetails, upcomingTalks } from '../data';
import './Home.css';

function Home() {
    return (
        <div className="container">
            <h1>VIDA Biweekly Seminar</h1>
            <TalkOverview talk={nextTalk} />
            <TalkDetails details={talkDetails} />
            <UpcomingTalks talks={upcomingTalks} />
        </div>
    );
}

export default Home;
