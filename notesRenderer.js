function checkValidFiles(file) {
  var extension = file.split(".")[1];
  if (extension == "xopp") {
    return true;
  }
}
const main = document.getElementById("main");
const currentNote = window.fs.importNote();
const notes = document.createElement("div");
const noteFiles = window.fs.readFiles(`xournall/${currentNote}`);
for (let i = 0; i < noteFiles.length; i++) {
  if (checkValidFiles(noteFiles[i])) {
    var button = document.createElement("button");
    button.innerText = noteFiles[i];
    notes.appendChild(button);
  }
}
main.appendChild(notes);
