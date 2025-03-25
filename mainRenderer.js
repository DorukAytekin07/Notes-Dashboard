const files = window.fs.readFiles("");
const navbar = document.getElementById("navbar");
const homePage = document.getElementById("home-page");
const settingPage = document.getElementById("settings-page");

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

homePage.addEventListener("click", () => {
  window.fs.changePage("home");
  window.fs.loadNote("home");
});

settingPage.addEventListener("click", () => {
  window.fs.changePage("settings");
  window.fs.loadNote("setting");
});

for (let i = 0; i < files.length; i++) {
  const file = files[i];
  if (file != "current-course") {
    const file_name = capitalize(file);

    var button = document.createElement("button");
    var p = document.createElement("p");

    button.addEventListener(`click`, () => {
      window.fs.changePage("notes");
      window.fs.loadNote(file);
    });
    p.innerText = `${file_name}`;
    button.id = `${file}`;
    button.className = "navbar-buttons"
    button.appendChild(p);
    navbar.appendChild(button);
  }
}
