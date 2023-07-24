// React JS
import React, { useState } from "react";

// Firebase
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";

// React Components
import Header from "./components/Header";
import MakeNote from "./components/MakeNote";
import Note from "./components/Note";

// CSS file
import "./App.css";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa1nu3n6p6cATgw_TdAFpZO6i_lFqlRi8",
  authDomain: "uzaif-keep-notes.firebaseapp.com",
  projectId: "uzaif-keep-notes",
  storageBucket: "uzaif-keep-notes.appspot.com",
  messagingSenderId: "105811736403",
  appId: "1:105811736403:web:4b2c8d9a644d3ff4d293a6",
  measurementId: "G-01DHCJPV05",
};

// Initialize Firebase App
initializeApp(firebaseConfig);

function App() {
  // useEffect(() => {
  //   first;

  //   return () => {
  //     second;
  //   };
  // }, [third]);

  // States
  const [titValue, setTitValue] = useState("");
  const [texValue, setTexValue] = useState("");
  const [noteArr, insertNote] = useState([]);

  // Functions
  const inpChange = (e) => {
    setTitValue(e.target.value);
  };

  const texChange = (e) => {
    setTexValue(e.target.value);
  };

  const deleteNote = (noteId) => {
    insertNote((unfilteredArr) =>
      unfilteredArr.filter((elem, index) => index !== noteId)
    );
  };

  const hideMakeNote = (callback1, callback2) => {
    if (titValue === "" && texValue === "") {
      callback1(false);
      callback2("Take a note...");
    } else {
      return;
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (titValue !== "" || texValue !== "") {
      insertNote([...noteArr, { title: titValue, note: texValue }]);
      setTitValue("");
      setTexValue("");
      // Save Notes In our Database
      const database = getDatabase();
      const notesRef = ref(database, "Notes");
      push(notesRef, { title: titValue, description: texValue });
    }
  };

  const database = getDatabase();
  const notesRef = ref(database, "Notes");
  onValue(notesRef, (snapshot) => {
    console.log(snapshot);
  });

  // JSX
  return (
    <>
      <Header />
      <main>
        <MakeNote
          hideFunction={hideMakeNote}
          titleValue={titValue}
          textareaValue={texValue}
          inpOnChange={inpChange}
          texOnChange={texChange}
          submitEvent={formSubmit}
        />
        <section
          id="notesContainer"
          className="flex flex-wrap items-start justify-center"
        >
          {noteArr.map((element, index) => (
            <Note
              title={element.title}
              key={index}
              id={index}
              note={element.note}
              onDelete={(e) => deleteNote(index)}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
