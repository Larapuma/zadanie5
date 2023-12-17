const savedname = localStorage.getItem('name');
const element1 = document.getElementById('nm');
element1.innerHTML = savedname;
const savedmail = localStorage.getItem('email');
const element2 = document.getElementById('em');
element2.innerHTML = savedmail;
const savedpass = localStorage.getItem('password');
const element3 = document.getElementById('pm');
element3.innerHTML = savedpass;
let id = (id) => document.getElementById(id);
let form = id("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    window.open("index.html");
    window.close("file.html");
});