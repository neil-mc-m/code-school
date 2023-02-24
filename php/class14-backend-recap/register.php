<?php

// sample signup php - note the password_hash function
include './src/DatabaseConnection.php';

if (isset($_POST['email']) && isset($_POST['password'])) {
    $connection = (new \App\DatabaseConnection())->getConnection();

    $stmt = $connection->prepare('INSERT INTO `user` (email, password, date_created) VALUES (?, ?, NOW());');

    $password_hash = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $stmt->bind_param('ss', $_POST['email'], $password_hash);
    $registered = $stmt->execute();


    if ($registered) {
        header('Location: ./login.php');
        exit();
    }

    header('Location: ./signup.php');
    exit();
}
