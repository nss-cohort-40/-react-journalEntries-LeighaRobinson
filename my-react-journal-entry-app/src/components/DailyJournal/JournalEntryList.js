import React, { useEffect } from "react";
import ManagerJournalEntries from "../../modules/ManagerJournalEntries";

const JournalEntryList = () => {
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
      We'll put some entries here eventually...
    </div>
  );
};

export default JournalEntryList;
