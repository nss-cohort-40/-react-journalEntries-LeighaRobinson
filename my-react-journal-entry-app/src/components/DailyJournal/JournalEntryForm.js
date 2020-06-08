import React from "react";
import "../journal.css";

const JournalEntryForm = () => {
  return (
    <>
      <div id="body_mainDivide" className="plainBackground_BlackBorder">
        <div id="test_secondDivide" className="css-selector">
          <div className="plainBackground_WhiteBorder">
            <h1> Daily Journal</h1>
            <form>
              <fieldset>
                <label for="journalDate">Date of entry</label>
                <input type="date" name="journalDate" id="journalDate" />
              </fieldset>
              <fieldset>
                <label for="conceptsCoverd">Concepts covered</label>
                <input
                  type="text"
                  name="conceptsCovered"
                  id="conceptsCovered"
                />
              </fieldset>
              <fieldset>
                <label for="journalEntry">Journal entry</label>
                <input type="textarea" name="journalEntry" id="journalEntry" />
              </fieldset>
              <fieldset>
                <label for="mood">Mood of the day</label>
                <select name="mood" id="mood">
                  <option value="happy">happy</option>
                  <option value="fine">fine</option>
                  <option value="sad">sad</option>
                </select>
              </fieldset>
              <button id="recordJournalEntry">Record Journal Entry</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default JournalEntryForm;
