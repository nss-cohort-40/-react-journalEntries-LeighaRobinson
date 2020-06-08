import React from "react";
import "./journal.css";

import JournalEntryCard from "./DailyJournal/journalEntryCard";
import TopOfPageIntro from "./DailyJournal/TopOfPage";
import JournalEntryForm from "./DailyJournal/JournalEntryForm";
import FeelingsSort from "./DailyJournal/FeelingsSort";
import JournalEntryList from "./DailyJournal/JournalEntryList";
const Journal = () => {
  return (
    <>
      <TopOfPageIntro />
      <div id="body_mainDivide" className="plainBackground_BlackBorder">
        <JournalEntryForm />
        <FeelingsSort />
      </div>
      <div id="body_mainDivideCard" className="plainBackground_BlackBorder">
        <JournalEntryCard />
        <JournalEntryList />
      </div>
    </>
  );
};

export default Journal;
