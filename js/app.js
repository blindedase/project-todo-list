const form = document.querySelector("#testForm");
const input = document.querySelector("input");
const list = document.querySelector("#userTasks");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const userInput = input.value;
    const newLI = document.createElement("li");
    newLI.innerText = userInput;
    list.append(newLI);
    input.value = "";
})