// GREET USER
function insertName(){
  const name = document.getElementById("user").value;
  if (name != ``){
    localStorage.setItem("userName", name);
    window.location.href = "app/todo-list.html";
  } else{
    alert("Please enter your name.");
  }
}

// AD TO DO LIST
function addList() {
  const li = document.createElement("li");
  const input = document.getElementById("add-task").value;
  const a = document.createTextNode(input);
  li.appendChild(a);

  if(input == '') {
      alert("Can't leave the input blank.");
  } else {
      document.getElementById("list").appendChild(li);
  }
  document.getElementById("add-task").value = "";

  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      const div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// REMOVE BUTTON
const close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
close[i].onclick = function() {
  const div = this.parentElement;
  div.style.display = "none";
}
}