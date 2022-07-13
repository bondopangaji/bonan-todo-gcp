// Copyright (c) 2022 Bondo Pangaji
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Register
const registerForm = document.getElementById("register-form");
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = registerForm["name"].value;
  const email = registerForm["email"].value;
  const password = registerForm["password"].value;

  registerForm.reset();

  auth
    .createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      // console.log(cred);
      return fs
        .collection("users")
        .doc(cred.user.uid)
        .set({
          Name: name,
          Email: email,
          Password: password,
        })
        .then(() => {
          console.log("success");
          location = "index.jsp";
        })
        .catch((err) => {
          console.log(err.message + "pertama");
        });
    })
    .catch((err) => {
      console.log(err.message + "kedua");
    });

});
