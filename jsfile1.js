var x,y,z = new Boolean(false);
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
let username = id("name"),
    email = id("email"),
    password = id("password"),
    passwordcon = id("passwordcon"),
    form = id("form"),
    errorMsg = classes("error");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkPasswordMatch(password, passwordcon);
    checkPassword(password, passwordcon);
    if (x === true & y === true){
        window.open("file.html")
        window.close("index.html")
    }
    localStorage.setItem("email", email.value);
    localStorage.setItem("name", username.value);
    localStorage.setItem("password", password.value);
});
let checkPasswordMatch = (password, passwordcon) => {
    if (password.value !== passwordcon.value) {
        alert("Ваши пароли не совпадают");
        password.style.border = "2px solid red";
        passwordcon.style.border = "2px solid red";
    }
    else {
        password.style.border = "2px solid green";
        passwordcon.style.border = "2px solid green";
        x = true;
    }
}
function sendMail() {
    var ps = document.getElementById("password").value;
    var em = document.getElementById("email").value;
    var nm = document.getElementById("name").value;
    window.location.href = "mailto:n.plechkov@yandex.ru?subject=Data&body="+"Your password: "+ps+'\n'+" Your name: " + nm+" Your email: " +em;
}

let checkPassword = (password,passwordcon) => {
    if (password.value.length < 8 || passwordcon.value.length < 8 ) {
        alert("Ваш пароль имеет мешьше 8 символов");
        password.style.border = "2px solid red";
        passwordcon.style.border = "2px solid red";
    } else if (!/[!#&]/.test(password.value) || !/[!#&]/.test(passwordcon.value)) {
        alert("Ваш пароль должен содержать хотя бы один символ из списка: !, #, &");
        password.style.border = "2px solid red";
        passwordcon.style.border = "2px solid red";
    } else {
        password.style.border = "2px solid green";
        passwordcon.style.border = "2px solid green";
        y = true;
    }
};