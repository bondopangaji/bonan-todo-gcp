<!--
 Copyright (c) 2022 Bondo Pangaji
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

<!doctype html>

<%@ page contentType="text/html;charset=UTF-8" %>
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

<body onload="loadbody();">

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

<div class="my-container">

</div>

<!-- Main -->
<main class="container">
    <form autocomplete="off" class="form-group" id="form">
        <label for="todos">Todo</label>
        <input type="text" placeholder="Type here" class="form-control" id="todos" required/>
        <!-- Button -->
        <button type="submit">Add Todo</button>
    </form>
    <!-- todos container -->
    <div class="container todo-container" id="todo-container"></div>
</main><!-- ./ Main -->

<!-- Footer -->
<footer class="container-fluid">
    <div class="date-time">
        <small id="weekday">weekday</small>,
        <small id="date">date</small>
        <small id="month">month</small>
        <small id="year">year</small>
    </div>
    <small> Developed by Bondo Pangaji & Husen Minan </small>
</footer><!-- ./ Footer -->

<!-- Firebase App -->
<script src="assets/vendor/firebase/firebase-app.js"></script>

<!-- Firebase Service -->
<script src="assets/vendor/firebase/firebase-auth.js"></script>
<script src="assets/vendor/firebase/firebase-firestore.js"></script>

<!-- Minimal theme switcher -->
<script src="assets/vendor/pico/minimal.theme.switcher.js"></script>

<script src="assets/js/main.js"></script>
</body>

</html>