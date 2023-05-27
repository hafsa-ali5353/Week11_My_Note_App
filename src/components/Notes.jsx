import React from "react";

import { FaEdit, FaTrash } from "react-icons/fa";

function Notes(props) {

  return (
    
    <div className="flex  flex-wrap gap-9 mt-6 p-6 justify-center items-center">
    {props.notes.map((notes) =>
       <div className="p-4 rounded bg-yellow-400 relative w-72 " key={notes.id}  >
   <div>
            <h1 className="text-lg font-bold text-black-500 truncate block capitalize">{notes.title}</h1>
            <p className="text-black-500 mr-3 text-lg py-3  break-words">{notes.content}</p>
           </div>
            <div className="w-full flex justify-center  items-center ">
          <FaEdit className="cursor-pointer"/>
          <FaTrash onClick={( ) => props.deleteNote(notes.id)} className="cursor-pointer  " />
         
         </div>
      
        </div>
    )}
    </div>
    
  );

}

export default Notes;