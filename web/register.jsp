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
    <title>Bonan Todo • Register</title>
    <link rel="shortcut icon" href="assets/img/logo-sm.jpg">

    <!-- Pico.css -->
    <link rel="stylesheet" href="assets/vendor/pico/pico.min.css">

    <!-- Custom styles for this example -->
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/nav.css">
</head>
Q

<body>

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
    </ul>
</nav><!-- ./ Nav -->

<!-- Main -->
<main class="container">
    <article class="grid">
        <div>
            <hgroup>
                <h1>Register</h1>
                <h2>Get started with Bonan Todo!</h2>
            </hgroup>
            <form id="register-form">
                <input type="email" name="name" placeholder="Name" aria-label="Name" required>
                <input type="email" name="email" placeholder="Email" aria-label="Email" required>
                <input type="password" name="password" placeholder="Password" aria-label="Password" required>
                <p> Have an account?
                    <a href="index.jsp" class="contrast"> Login</a>
                </p>
                <button type="submit" class="contrast">Register</button>
            </form>
        </div>
        <div></div>
    </article>
</main><!-- ./ Main -->

<!-- Footer -->
<footer class="container-fluid">
    <small> Developed by Bondo Pangaji & Husen Minan </small> <br>
</footer><!-- ./ Footer -->

<!-- Minimal theme switcher -->
<script src="assets/vendor/pico/minimal.theme.switcher.js"></script>

<!-- Firebase App -->
<script src="assets/vendor/firebase/firebase-app.js"></script>

<!-- Firebase Service -->
<script src="assets/vendor/firebase/firebase-auth.js"></script>
<script src="assets/vendor/firebase/firebase-firestore.js"></script>

<script src="assets/js/register.js"></script>

</body>

</html>