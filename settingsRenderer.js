const datas = window.fs.returnDatas();
const input = document.getElementById("home-folder")
const submit = document.getElementById("submit")
input.placeholder = datas.homeFolder
submit.addEventListener("click", () => {
  window.fs.changeHomeFolder(input.value)
})
