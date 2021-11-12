import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Note } from "./models/note.model";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Meeting",
      text: "Schedule meeting UI/UX team",
      color: "dfdfdf",
      date: new Date().toString(),
    },
  ]);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
