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