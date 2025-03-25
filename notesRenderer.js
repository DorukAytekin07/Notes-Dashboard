function checkValidFiles(file) {
  var extension = file.split(".")[1];
  if (extension == "xopp") {
    return true;
  }
}
function removeExtension(file) {
  return (extension = file.split(".")[0]);
}
const main = document.getElementById("main");
const currentNote = window.fs.importNote();
const noteFiles = window.fs.readFiles(`/${currentNote}`);
for (let i = 0; i < noteFiles.length; i++) {
  if (checkValidFiles(noteFiles[i])) {
    var button = document.createElement("button");
    var details = document.createElement("div");
    var noteName = document.createElement("p");
    noteName.innerText = capitalize(removeExtension(noteFiles[i]))
    details.className = "details";

    details.appendChild(noteName);
    button.appendChild(details);

    button.className = "note";
    button.addEventListener("click", () => {
      window.fs.openNote(currentNote + "/" + noteFiles[i]);
    });
    main.appendChild(button);
  }
}
