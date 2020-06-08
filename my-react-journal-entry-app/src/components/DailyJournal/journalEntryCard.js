import React from "react";
import "../journal.css";
const JournalEntryCard = () => {
  return (
    <div id="test_secondDivideCard" className="css-selector">
      <div className="plainBackground_WhiteBorder">
        <h3>
          Date of Entry: <span className="card-date">2/7/20</span>
        </h3>
        <h3>
          Concepts Covered: <span className="card-concepts">React etc.</span>
        </h3>
        <p>Journal Entry: It was a long day but very interesting</p>
        <h3>Mood of the day: fair </h3>
      </div>
    </div>
  );
};

export default JournalEntryCard;
