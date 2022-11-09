
var allNotes = [];

class Note{
    constructor(title, textarea, date){
        this.title = title;
        this.textarea = textarea;
        this.date = date;
    }


}

let title = "Design Ideas";
let textarea = "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.";
let date = "November 9th 2022";
let note = new Note(title, textarea, date);

allNotes.push(note);

/*class AllNotes{
    constructor(){
        this.notes = [];
    }

    addNewNoteToNotes(note){
        this.notes.push(note);
    }

    getNotes(){
        return this.notes;
    }
}*/

const addNotes =(()=>{
    
    var contact = document.querySelector("#note");
    contact.addEventListener("submit", (e)=>{
      console.log(e.target);
       e.preventDefault();
      const form = document.getElementById("note");
      const formData = new FormData(form);
        
      console.log(formData);
      let title = formData.get("head");
      let textarea = formData.get("noteContent")
      let date = formData.get("dateContent");
       
      let note = new Note(title, textarea, date);

      console.log(note);
      let parent = e.target.parentNode;
      parent.style.display = "none";
      allNotes = JSON.parse(localStorage.getItem("notes"));
      allNotes.push(note);


      console.log(note);
      localStorage.setItem("notes", JSON.stringify(allNotes));

    });
})();


console.log(localStorage.getItem("notes"));

var addNote = document.querySelector("#add");
var newNote = document.querySelector(".newNote");
addNote.addEventListener("click", (e)=>{
    newNote.style.display = "block";
    addNotes;
});
addNotes;



const displayAllNotes = ()=>{

    var storedNotes = localStorage.getItem("notes");
    var parsedNotes = JSON.parse(storedNotes);
    
    if(storedNotes === null){
        return [];
    }
    console.log(parsedNotes);
    
    for(item of parsedNotes){
        var note = document.createElement("div");
        note.setAttribute("class", "note");

        var title = document.createElement("h3");
        title.setAttribute("class", "title");
        title.textContent = item.title;
        console.log(title);
        var textarea = document.createElement("p");
        textarea.setAttribute("class", "text");
        textarea.textContent = item.textarea;

        var hr = document.createElement("hr");
        hr.setAttribute("class", "hr");
        var date = document.createElement("p");
        date.setAttribute("class", "date");
        date.textContent = item.date;
        console.log(item);
        note.appendChild(title);
        note.appendChild(textarea);
        note.appendChild(hr);
        note.appendChild(date);
       
        var Notes = document.querySelector(".notes");
        Notes.append(note);
    }
    
    
};


displayAllNotes();
