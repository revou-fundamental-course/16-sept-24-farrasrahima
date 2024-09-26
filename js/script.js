function replaceName() {
    let user = prompt("Hi, what's your name?", "");
    document.getElementById("name").innerHTML = user;
}

replaceName();

const form = document.getElementById("form_");
const username = document.getElementById("username");
const message = document.getElementById("message");
const birthdate = document.getElementById("birthdate");
const button = document.getElementById("submit_btn");

const username_error = document.getElementById("username_error");
const message_error = document.getElementById("message_error");
const birthdate_error = document.getElementById("birthdate_error");

button.addEventListener("click", displayDetails);

var row = 1;

function displayDetails() {
    if(username.value === "" || birthdate.value === "" || message.value === "") {
        preventDefault(); }

    var display = document.getElementById('table_result')
    var newRow = display.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 =newRow.insertCell(1);
    var cell3 =newRow.insertCell(2);
    var cell4 =newRow.insertCell(3);

    cell1.innerHTML = username.value;
    cell2.innerHTML = birthdate.value;
    cell3.innerHTML = document.querySelector("input[name='gender_radio']:checked").value;
    cell4.innerHTML = message.value;

    row++; 
}

