//implement the code of calling a function
//from preload js loadNote probably 
//and assing it value current note
const currentNote = window.fs.importNote()
console.log(currentNote);
if (currentNote != "index") {
	var main = document.getElementById("main");
	var text = document.createElement("p");
	text.innerText = currentNote;
	main.appendChild(text);
}
