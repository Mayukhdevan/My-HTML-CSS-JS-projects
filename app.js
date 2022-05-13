 
// console.log("Welcome to notes app. This is app.js");
showNotes();

// If user adds a note, add it to the localStorage
let btn = document.getElementById("btn");
btn.addEventListener("click", function(e) {
  let textarea = document.getElementById("textarea");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(textarea.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  textarea.value = "";
  // console.log(notesObj);
  showNotes();
});

// Function to show elements from localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function(element, index) {
    html += `
                <div id="cards" class="cards">
                    <div class="card-text">
                      <p>${element}</p>
                    </div>
                    <button 
                    class="delete-btn">
                      <i class="fa fa-remove" 
                      id="${index}" onclick="deleteNote(this.id)"></i>
                    </button>
                </div>`;
  });
  let notesElm = document.getElementById("note-cards");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  }
  else {
    notesElm.innerHTML = `Nothing to show!`;
  };
};

// Function to delete a note
function deleteNote(index) {
  // console.log("I am deleting", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
};


let search = document.getElementById("input-search");
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let cards = document.getElementsByClassName("cards");
    Array.from(cards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "flex";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    });
});
 