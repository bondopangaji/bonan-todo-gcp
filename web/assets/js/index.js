// Copyright (c) 2022 Bondo Pangaji
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const loginEmail = loginForm["email"].value;
  const loginPassword = loginForm["password"].value;

  auth
    .signInWithEmailAndPassword(loginEmail, loginPassword)
    .then(() => {
      location = "main.jsp";
    })
    .catch((err) => {
      alert(err.message);
    })

});
