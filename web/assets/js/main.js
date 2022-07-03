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

const spanDate = document.getElementById("date");
const spanMonth = document.getElementById("month");
const spanYear = document.getElementById("year");
const spanWeekday = document.getElementById("weekday");

const todoContainer = document.getElementById("todo-container");

function loadbody() {
  // console.log('body is loaded');
  const date = new Date();
  const month = date.toLocaleString("default", { month: "long" });
  const myDate = date.getDate();
  const year = date.getFullYear();
  const day = date.toLocaleDateString("default", { weekday: "long" });

  spanDate.innerText = myDate;
  spanMonth.innerText = month;
  spanYear.innerText = year;
  spanWeekday.innerText = day;
}

/**
 * Check if user logged in
 */
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("User logged in");
  } else {
    alert("Session expired or you've been logged out");
    location = "index.jsp";
  }
});

/**
 * Logout
 */
function logout() {
  auth.signOut();
}

/**
 * Adding todo to Firetore
 */
const form = document.getElementById("form");

// Async add fn
async function add(id, todos) {
  // Check if id & todo exist
  if (id === null && id === undefined) {
    console.log("User id doesn't exist!");
  } else if (todos === null && todos === undefined) {
    console.log("Todo doesn't exist!");
  } else {
    await auth.onAuthStateChanged((user) => {
      if (user) {
        fs.collection(user.uid)
          .doc("_" + id)
          .set({
            id: "_" + id,
            todos,
          })
          .then(() => {
            console.log("Successfully added todo!");
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    });
  }
}

// Form listener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todos = form["todos"].value;
  // console.log(todos);
  let id = Math.floor(Math.random() * 16);
  form.reset();
  add(id, todos);
});

/**
 * Render todos fn
 */
async function getAll(individualDoc) {
  // Parent div
  let parentDiv = document.createElement("div");

  parentDiv.className = "container todo-box";
  parentDiv.setAttribute("data-id", individualDoc.id);

  // Todo div
  let todoDiv = document.createElement("div");

  todoDiv.textContent = await individualDoc.data().todos;

  // Delete button
  let del = document.createElement("button");
  del.appendChild(document.createTextNode("Delete"));

  parentDiv.appendChild(todoDiv);
  parentDiv.appendChild(del);

  todoContainer.appendChild(parentDiv);

  // Remove todo event
  del.addEventListener("click", (e) => {
    const id = e.target.parentElement.getAttribute("data-id");
    // Check if todo exist
    if (id === null && id === undefined) {
      console.log("Todo with id: " + id + " does not exist");
    } else {
      remove(id);
    }
  });
}

// Remove todo fn
async function remove(id) {
  await auth.onAuthStateChanged((user) => {
    if (user) {
      fs.collection(user.uid)
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    }
  });
}

// Snapshot listener
auth.onAuthStateChanged((user) => {
  if (user) {
    fs.collection(user.uid).onSnapshot((snapshot) => {
      let changes = snapshot.docChanges();
      changes.forEach((change) => {
        if (change.type == "added") {
          getAll(change.doc);
        } else if (change.type == "removed") {
          let li = todoContainer.querySelector(
            "[data-id=" + change.doc.id + "]"
          );
          todoContainer.removeChild(li);
        }
      });
    });
  }
});
