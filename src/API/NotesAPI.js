export default class NotesAPI{
    static GetNotes(){
        const notes = JSON.parse(localStorage.getItem("notes") || "[]");
        return notes.sort(()=> {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
    }
    static SaveNote(noteToSave){
        const notes = NotesAPI.GetNotes();
        const existing = notes.find(note => note.id == noteToSave.id);
        //edit/update
        if(existing){
            existing.title = noteToSave.title;
            existing.body = noteToSave.body;
            existing.updated = new Date().toISOString();
        }else{
            noteToSave.id = Math.floor(Math.random()*100000);
            noteToSave.updated = new Date().toISOString();
            notes.push(noteToSave);
        }
        localStorage.setItem("notes", JSON.stringify(notes));
    }

    static DeleteNote(id){
        const notes = NotesAPI.GetNotes();
        const newNotes = notes.filter(note => note.id != id);
        localStorage.setItem("notes", JSON.stringify(newNotes));
    }
}