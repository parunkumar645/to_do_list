const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    const li = document.createElement("li");
    li.textContent = inputBox.value; // corrected variable name from 'inputValue' to 'inputBox.value'
    listcontainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  inputBox.value = "";
  saveData();
}

listcontainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      // corrected 'tagname' to 'tagName'
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask() {
  listcontainer.innerHTML = localStorage.getItem("data");
}

showTask();
