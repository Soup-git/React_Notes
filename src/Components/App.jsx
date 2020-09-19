import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea"
function App(){
	const [notes,addNote]=React.useState([]);
	function add(newAddNote){
		addNote((prevValue)=>{
			return [...prevValue,newAddNote];
		});
	}
	function deleteNote(id){
		addNote((prevValue)=>{
			return prevValue.filter((note,index)=>{
				return index!==id;
		})});
	}
	return (
		<div>
			<Header />
			<CreateArea addNewNote={add} />
			{notes.map((newNote,index)=>(
				<Note
					key={index}
					id={index}
					title={newNote.title}
					content={newNote.content}
					deleteItem={deleteNote}
				/>
			))}
			<Footer />
		</div>
	)
}
export default App;