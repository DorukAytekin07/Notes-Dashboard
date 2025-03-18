const currentNote = window.fs.importNote()
console.log(currentNote);
if (currentNote != "index") {
	var main = document.getElementById("main");
	var text = document.createElement("p");
	text.innerText = currentNote;
	main.appendChild(text);
}
