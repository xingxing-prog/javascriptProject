
const addNotes = (()=>{

    const addNewNotes =()=>{
        var note = document.createElement("div");
        note.setAttribute("class", "newNote");
        var form = document.createElement("form");
        var title = document.createElement("input");
        title.setAttribute("class", "title");
        var textarea = document.createElement("textarea");
        textarea.setAttribute("class", "textarea");
        var hr = document.createElement("hr");
        hr.setAttribute("class", "hr");
        var date = document.createElement("input");
        date.setAttribute("class", "date");

        form.appendChild(title);
        form.appendChild(textarea);
        form.appendChild(hr);
        form.appendChild(date);
        note.append(form);
        var Notes = document.querySelector(".notes");
        Notes.append(note);
    }

    var addNotes = document.querySelector(".addNote");
    addNotes.addEventListener("click", addNewNotes);


})();

addNotes;