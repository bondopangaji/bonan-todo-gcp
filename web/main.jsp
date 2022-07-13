<!--
 Copyright (c) 2022 Bondo Pangaji
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

<!doctype html>

<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bonan Todo</title>
    <link rel="shortcut icon" href="assets/img/logo-sm.jpg">

    <!-- Pico.css -->
    <link rel="stylesheet" href="assets/vendor/pico/pico.min.css">

    <!-- Custom styles for this example -->
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/nav.css">
    <link rel="stylesheet" href="assets/css/main.css">
</head>

<body onload="loadCurrentDate();">

<!-- Nav -->
<nav class="container-fluid">
    <ul>
        <li>
            <a href="./" class="contrast" onclick="event.preventDefault()"><strong>Bonan Todo List</strong></a>
        </li>
    </ul>
    <ul>
        <li>
            <details role="list" dir="rtl">
                <summary aria-haspopup="listbox" role="link" class="secondary">Theme</summary>
                <ul role="listbox">
                    <li><a href="#" data-theme-switcher="auto">Auto</a></li>
                    <li><a href="#" data-theme-switcher="light">Light</a></li>
                    <li><a href="#" data-theme-switcher="dark">Dark</a></li>
                </ul>
            </details>
        </li>
        <li>
            <a href="#" onclick="logout()">Logout</a>
        </li>
    </ul>
</nav><!-- ./ Nav -->

<main class="main container">
    <ul class="cards" id="cards">
    </ul>
</main>

<!-- Button to trigger the modal -->
<button class="contrast fab"
        data-target="modal-todo"
        onClick="toggleModal(event)">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
         viewBox="0 0 16 16">
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
    </svg>
</button>

<!-- Modal -->
<dialog id="modal-todo">
    <article>
        <form autocomplete="off" class="form-group modal-form" id="form" href="#close" aria-label="Close" data-target="modal-todo" onsubmit="toggleModal(event)">
            <a href="#close" aria-label="Close" class="del-btn" data-target="modal-todo"
               onclick="toggleModal(event)"></a>
            <label for="todo-title">Todo Title</label>
            <input type="text" placeholder="Type here" class="form-control" id="todo-title" required/>
            <label for="todo-description">Todo Description</label>
            <textarea placeholder="Type here" class="form-control" id="todo-description" required></textarea>
            <button type="submit">Add Todo</button>
        </form>
    </article>
</dialog><!-- ./ Modal example -->

<!-- Footer -->
<footer class="container-fluid">
    <div class="date-time">
        <small id="weekday">weekday</small>,
        <small id="date">date</small>
        <small id="month">month</small>
        <small id="year">year</small>
    </div>
    <small> Developed by Bondo Pangaji & Husen Minan</small>
</footer><!-- ./ Footer -->

<!-- Firebase App -->
<script src="assets/vendor/firebase/firebase-app.js"></script>

<!-- Firebase Service -->
<script src="assets/vendor/firebase/firebase-auth.js"></script>
<script src="assets/vendor/firebase/firebase-firestore.js"></script>

<!-- Pico -->
<script src="assets/vendor/pico/minimal.theme.switcher.js"></script>
<script src="assets/vendor/pico/modal.js"></script>

<!-- Current date -->
<script src="assets/js/current-date.js"></script>

<!-- Firebase config initialization -->
<script src="assets/js/init.js"></script>

<!-- App -->
<script src="assets/js/main.js"></script>


</body>

</html>