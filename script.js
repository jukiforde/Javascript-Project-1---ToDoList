"use strict";

const addItemBtn = document.querySelector("add-button");
let todoUL = document.getElementById("todo-ul");
const todoDiv = document.getElementById("todoListDiv");
let userInputField = document.getElementById("inputText");

let listItems = document.getElementsByTagName("LI");

//***************************************************
//Function that creates a button to delete items
//**************************************************
const addCloseBtn = function () {
  for (let i = 0; i <= listItems.length - 1; i++) {
    let xBtn = document.createElement("BUTTON");
    let xBtnChar = document.createTextNode("\u00D7");

    xBtn.className = "btnClose";
    xBtn.appendChild(xBtnChar);

    listItems[i].appendChild(xBtn);
  }
};

addCloseBtn();

const addItem = function () {
  let newLi = document.createElement("li");
  newLi.innerText = userInputField.value;
  todoUL.appendChild(newLi);

  let xBtn = document.createElement("BUTTON");
  let xBtnText = document.createTextNode("\u00D7");
  xBtn.className = "btnClose";
  xBtn.appendChild(xBtnText);
  newLi.appendChild(xBtn);

  deleteItemOnClick(), 6000;
};

addButton.addEventListener("click", addItem);

const deleteItemOnClick = function () {
  let xBtn = document.getElementsByClassName("btnClose");

  document.querySelectorAll(".btnClose").forEach((item) => {
    item.addEventListener("click", () => {
      item.parentElement.style.display = "none";
    });
  });
};
