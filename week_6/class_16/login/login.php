<form action="log-me-in.php" method="post">
    <label for="userName">Username</label>
    <input type="text" name="loggedInName" id="userName"/>
    <label for="password">Password</label>
    <input type="text" name="password" id="password"/>
    <input type="submit">Login</input>
</form>
<?php
session_start();
include 'debug.php';

if (isset($_SESSION['error_message'])) {
    echo $_SESSION['error_message'];
}