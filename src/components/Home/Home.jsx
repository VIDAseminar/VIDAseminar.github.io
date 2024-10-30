// src/components/Home/Home.jsx
import React from 'react';
import TalkOverview from '../TalkOverview/TalkOverview';
import TalkDetails from '../TalkDetails/TalkDetails';
import UpcomingTalks from '../UpcomingTalks/UpcomingTalks';
import { nextTalk, talkDetails, upcomingTalks } from '../data';
import './Home.css'; // 确保引入样式

function Home() {
    return (
        <div className="container"> {/* 确保包裹在这里 */}
            <h1>VIDA Biweekly Research Talk Series</h1>
            <TalkOverview talk={nextTalk} />
            <TalkDetails details={talkDetails} />
            <UpcomingTalks talks={upcomingTalks} />
        </div>
    );
}

export default Home;
