import React, { useEffect, useState } from "react";

// Import all your components here
// Soo Jiido wixii components ah ood u baahantahay

import axios from "axios";

import Notes from './components/Notes';
import AddNote from "./components/AddNote";
function App() { 
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9000/notes')
    .then((res)=>{
      setNotes(res.data);
    })
    .catch((error)=>{
      console.log(error)
    });
    // get all notes from localhost:9000/notes using axios
    // Dhamaan wixii notes ah kasoo jiido localhost:9000/notes adigoo axios isticmaalaayo
  }, []);

  const createNote = (noteData) => {
    axios.post('http://localhost:9000/create_note',noteData)
    .then((res)=>{
      setNotes([res.data,...notes])
    })
    // Make API call to create a note (POST request to localhost:9000/create_note)
    // Halkaas ka samee note cusub adigoo POST request isticmaalaayo localhost:9000/create_note
  };

  const deleteNote = (id) => {
    axios.delete(`http://localhost:9000/delete_note/${id}`)
  .then(res => {
    setNotes(res.data);
    const filterNotes = notes.filter((notes) => notes.id !== id);
 
    setNotes(filterNotes);
  })
  .catch(error => {
    console.error(error);
  });

    // Make API call to delete a note (DELETE request to localhost:9000/delete_note/:id)
    // Halkaas ka tirtir note adigoo DELETE request isticmaalaayo localhost:9000/delete_note/:id
  };

  // STRETCH GOAL: Implement edit functionality
  // STRETCH GOAL: Isku day inaa edit ku sameyso notes-ka
  const editNote = (noteID, updatedNote) => {
    // Make API call to edit a note (PUT request to localhost:9000/edit_note/:id)
    // Pass the updated note data in the request body

    axios.put(`http://localhost:9000/edit_note/${noteID}`, updatedNote)
      .then((res) => {
        console.log(res.data);
        // Update the notes state with the updated note data
        const updatedNotes = notes.map((note) => {
          if (note.id === noteID) {
            return { ...note, ...updatedNote };
          }
          return note;
        });
        setNotes(updatedNotes);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="bg-blue-600 min-h-screen flex">
      <div className="w-full">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl text-white mb-5 mt-5">My Notes</h3>
          { /* Add here all the components you need */ }
          { /* Halkaas ku dar components-ka aad u baahan tahay */ }
        <AddNote createNote={createNote} />
        <Notes  notes={notes} deleteNote={deleteNote} />
        </div>
      </div>
    </div>
  );
}

export default App;