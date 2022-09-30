<?php
session_start();
if (isset($_POST['loggedInName']) && !empty($_POST['loggedInName'])) {
    setcookie('authenticated', 'true');
    $_SESSION['loggedInName'] = $_POST['loggedInName'];
    header("Location: index.php");
} else {
    header("Location: login.php");
}

exit();