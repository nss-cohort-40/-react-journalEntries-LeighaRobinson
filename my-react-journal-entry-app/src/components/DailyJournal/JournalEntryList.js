import React, { useState, useEffect } from "react";
import ManagerJournalEntries from "../../modules/ManagerJournalEntries";
import JournalEntryCard from "./journalEntryCard";

const JournalEntryList = (props) => {
  const [entries] = useState([]);

  const getEntries = () => {
    return ManagerJournalEntries.getAll().then((entriesFromAPI) => {
      //wait for it later
      console.log(entriesFromAPI);
    });
  };

  useEffect(() => {
    getEntries();
  }, []);

  return (
    <div className="container-cards">
      {entries.map((entry) => (
        <JournalEntryCard key={entry.id} entry={entry} {...props} />
      ))}
    </div>
  );
};

export default JournalEntryList;
