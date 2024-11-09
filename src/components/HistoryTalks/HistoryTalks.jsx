import React from "react";
import "./HistoryTalks.css";
import { historyTalksData } from "../data";

function HistoryTalks() {
  return (
    <div className="container_history">
      {historyTalksData.length === 0 ? (
        <p>No historical talk information available to display.</p>
      ) : (
        historyTalksData.map((talk, index) => (
          <div className="event-card" key={index}>
            <h3 className="date">{talk.date}</h3>
            <div className="speakers">
              {talk.speakers.map((speaker, i) => (
                <div className="speaker-card" key={i}>
                  <p className="speaker-info">
                    <span className="speaker-name">{speaker.name}</span>:{" "}
                    <span className="speaker-title">{speaker.title}</span>
                  </p>
                  <p>
                    <a
                      href={speaker.zoomLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Recording
                    </a>
                  </p>
                  <p>
                    <a
                      href={speaker.slidesLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Slides
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default HistoryTalks;
