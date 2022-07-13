// Copyright (c) 2022 Bondo Pangaji
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * =====================================================
 * FIREBASE AUTHENTICATION
 * =====================================================
 */

// Check if user logged in
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("User successfully login")
  } else {
    alert("Session expired or you've been logged out")
    location = "index.jsp";
  }
});

// Logout
function logout() {
  auth.signOut();
}

/**
 * =====================================================
 * FIREBASE CRUD
 * =====================================================
 */
const form = document.getElementById("form");

// generate random UID fn
function uid() {
  let a = new Uint32Array(3)
  window.crypto.getRandomValues(a)
  return (performance
    .now()
    .toString(36)+Array.from(a).map(A => A.toString(36))
    .join(""))
    .replace(/\./g,"")
}

// Add to-do form listener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const id = uid();
  const todoTitle = form["todo-title"].value;
  const todoDescription = form["todo-description"].value;
  const createdAt = new Date().toLocaleString();
  form.reset();
  addTodo(id, todoTitle, todoDescription, createdAt)
});

/**
 * Will add to-do to firebase
 * @param id
 * @param todoTitle
 * @param todoDescription
 * @param createdAt
 * @returns {Promise<void>}
 */
async function addTodo(id, todoTitle, todoDescription, createdAt) {
  // Check if id & to-do exist
  if (id === null && id === undefined) {
    alert("User id doesn't exist!")
  } else if (todoTitle === null && todos === undefined) {
    alert("Please fill todo-title");
  } else if (todoDescription === null && todos === undefined) {
    alert("Please fill todo-description");
  } else {
    await auth.onAuthStateChanged((user) => {
      if (user) {
        fs.collection(user.uid)
          .doc("_" + id)
          .set({
            id: "_" + id,
            todoTitle,
            todoDescription,
            createdAt
          })
          .then(() => {
            console.log("Successfully added todo!");
          })
          .catch((err) => {
            alert(err.message);
          });
      }
    });
  }
}


// to-do container
const todoContainer = document.getElementById("cards")

// Render to-do
async function getAll(individualDoc) {

  // Parent element
  const parentEl = document.createElement("li");

  parentEl.className = "cards_item";
  parentEl.setAttribute("data-id", individualDoc.id);

  // Card
  const card = document.createElement("div");
  card.className = "card";

  // Card Content
  const cardContent = document.createElement("div");
  cardContent.className = "card_content";

  // Card title
  const cardTitle = document.createElement("h2")
  cardTitle.className = "card_title";
  cardTitle.textContent = await individualDoc.data().todoTitle;

  // Card description
  const cardDescription = document.createElement("p")
  cardDescription.className = "card_text";
  cardDescription.textContent = await individualDoc.data().todoDescription;

  // Card date
  const cardDate = document.createElement("small")
  cardDate.className = "card_date";
  cardDate.textContent = await individualDoc.data().createdAt;

  // Delete button
  let delBtn = document.createElement("a");
  delBtn.className = "del-btn";
  // delBtn.appendChild(document.createTextNode("x"));


  card.appendChild(delBtn);
  cardContent.appendChild(cardTitle);
  cardContent.appendChild(cardDescription);
  cardContent.appendChild(cardDate);
  card.appendChild(cardContent);

  parentEl.appendChild(card);

  todoContainer.appendChild(parentEl);

  // Remove to-do event
  delBtn.addEventListener("click", (e) => {
    const id = e.target.parentElement.parentElement.getAttribute("data-id");
    // Check if to-do exist
    if (id === null && id === undefined) {
      alert("Todo with id: " + id + " does not exist");
    } else {
      remove(id);
    }
  });
}

// Remove to-do fn
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