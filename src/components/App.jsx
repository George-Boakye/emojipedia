import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {
  function createdEntry(emojiTerms) {
    return (
      <Entry
        key={emojiTerms.id}
        emoji={emojiTerms.emoji}
        term={emojiTerms.name}
        description={emojiTerms.meaning}
      />
    );
  }

  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createdEntry)}</dl>
    </div>
  );
}

export default App;
