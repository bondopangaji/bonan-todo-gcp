// Copyright (c) 2022 Bondo Pangaji
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const firebaseConfig = {
  apiKey: "AIzaSyDFnPYq5nXT8EjQWaVMUOpqL9DkUUKudLI",
  authDomain: "bonan-todo.firebaseapp.com",
  projectId: "bonan-todo",
  storageBucket: "bonan-todo.appspot.com",
  messagingSenderId: "829743582947",
  appId: "1:829743582947:web:c91c4d580574a1179bbfd6",
  measurementId: "G-VM6HB4P5PH",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();

// Register
const registerForm = document.getElementById("register-form");
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = registerForm["name"].value;
  const email = registerForm["email"].value;
  const password = registerForm["password"].value;
  // console.log(name, email, password);
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
          console.log(err.message);
        });
    })
    .catch((err) => {
      console.log(err.message);
    });
});
