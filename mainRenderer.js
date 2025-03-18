const files = window.fs.readFiles();
navbar = document.getElementById("navbar");

function capitalize(string) {
	words = string.split("-");
	newWord = "";
	for (var i = 0; i < words.length; i++) {
		word = words[i];
		newWord += word[0].toUpperCase() + word.substring(1);
		if (i < words.length - 1) {
			newWord += " ";
		}
	}
	return newWord;
}

for (let i = 0; i < files.length; i++) {
	const file = files[i];
	if (file != "current-course") {
		const file_name = capitalize(file);

		var div = document.createElement("div");
		var button = document.createElement("button");
		var p = document.createElement("p");

		div.style.backgroundColor = "#eee";
		button.addEventListener(`click`, () => {
			window.fs.changePage(file);
      //save data to json file
			window.fs.loadNote(file)
		});
		p.innerText = `${file_name}`;
		button.id = `${file}`;

		button.appendChild(p);
		div.appendChild(button);
		navbar.appendChild(div);
	}
}


