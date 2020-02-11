var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");
let rmbutton = document.querySelectorAll(".remove");
let p = document.querySelector("#first");

// load local Storage
const loadList = e => {
  let list = localStorage.getItem("items");
  if (list === null || list === "[]") {
    localStorage.setItem("items", "[]");
    p.textContent = "EMPTY LIST";
    p.setAttribute("class", "text-danger");
  } else {
    p.textContent = "Get it done today";
    p.setAttribute("class", "text-success");
    JSON.parse(list).forEach(e => createListElement(e, "create"));
  }
};

const listInValid = list => {
  if (list === null && list === undefined && list === "" && list.length === 0) {
    return 0;
  } else {
    return 1;
  }
};
const inputLength = () => {
  return input.value.length;
};
const makeIt = val => {
  let li = document.createElement("li");
  let dbtn = document.createElement("button");
  let i = document.createElement("i");
  dbtn.setAttribute("class", "remove btn fas fa-trash-alt");
  li.appendChild(document.createTextNode(val));
  li.appendChild(dbtn);
  ul.appendChild(li);
  input.value = "";
};
const createListElement = (val, wtd) => {
  p.textContent = "Get it done today";
  p.setAttribute("class", "text-success");
  if (wtd === "create") {
    makeIt(val);
  } else {
    let list = JSON.parse(localStorage.getItem("items"));
    localStorage.setItem("items", JSON.stringify([...list, val]));
    makeIt(val);
  }
};
const addListAfterClick = e => {
  if (inputLength() > 0) {
    // local storage
    createListElement(input.value);
  }
};
const addListAfterKeypress = (event, v) => {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement(input.value);
  }
};
const lisManipulation = e => {
  if (e.target.className !== "remove btn fas fa-trash-alt") {
    return e.target.classList.toggle("done"); //Mark item
  } else {
    // delete item
    e.target.parentElement.remove();
    let list = localStorage.getItem("items");
    list = JSON.parse(list);
    let val = e.target.parentElement.textContent;
    console.log(val);
    let nlist = list.filter(e => e !== val);
    localStorage.setItem("items", JSON.stringify(nlist));
    if (localStorage.getItem("items") === "[]") {
      p.textContent = "EMPTY LIST";
      p.setAttribute("class", "text-danger");
    }
  }
};

window.addEventListener("load", loadList);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", lisManipulation);
