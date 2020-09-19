import React from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
function CreateArea(props) {
	// const [notesArray,updateNotes]=React.useState([]);
	const [newNote,addNote]=React.useState({
		title:"",
		content:""
	})
	function handleChange(event){
		const {name,value}=event.target;
		addNote((prevValue)=>{
			return {...prevValue,[name]:value};
		});
	}
	function handleClick(event){
		props.addNewNote(newNote);
		addNote({title:"",content:""});
		event.preventDefault();
	}
  return (
    <div>
      <form className="create-note">
        <input onChange={handleChange} value={newNote.title} name="title" placeholder="Title" />
        <textarea onChange={handleChange} value={newNote.content} name="content" placeholder="Take a note..." rows="3" />
		  <Fab onClick={handleClick} ><AddIcon /></Fab>
      </form>
    </div>
  );
}

export default CreateArea;
