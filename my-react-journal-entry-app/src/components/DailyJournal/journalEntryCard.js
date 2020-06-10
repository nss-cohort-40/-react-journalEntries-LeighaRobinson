import React from "react";
import "../journal.css";
const JournalEntryCard = (props) => {
  return (
    <div id="test_secondDivideCard" className="css-selector">
      <div className="plainBackground_WhiteBorder">
        <h3>
          Date of Entry:
          <span className="card-date">{props.entry.dateOfEntry}</span>
        </h3>
        <h3>
          Concepts Covered:{" "}
          <span className="card-concepts">{props.entry.conceptsCovered}</span>
        </h3>
        <p>Journal Entry:{props.entry.longForm}</p>
        <h3>Mood of the day: {props.entry.longForm} </h3>
      </div>
    </div>
  );
};

export default JournalEntryCard;
