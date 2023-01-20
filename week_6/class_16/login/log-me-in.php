<?php
session_start();

include 'config/dbconfig.php';
include 'debug.php';

$connection = getConnection();

if (!isset($_POST['loggedInName'])) {
    header("Location: login.php");
    exit();
}

if (!empty($_POST['loggedInName']) && isset($_POST['password'])) {
    $statement = $connection->prepare('select * from users where username = ? and password = ?');

    $statement->bind_param('ss', $_POST['loggedInName'], $_POST['password']);

    $statement->execute();

    $mysqlResult = $statement->get_result();

    if ($mysqlResult->num_rows > 0) {
        $user = $mysqlResult->fetch_assoc();

        $_SESSION['user']['id'] = $user['id'];
        $_SESSION['user']['username'] = $user['username'];
        $_SESSION['user']['created_at'] = $user['created_at'];
        unset($_SESSION['error_message']);
    } else {
        $_SESSION['error_message'] = 'Username or password incorrect';
    }

    header("Location: index.php");
    exit();
}
