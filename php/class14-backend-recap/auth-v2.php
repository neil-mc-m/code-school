<?php
session_start();
include './src/DatabaseConnection.php';

if (isset($_POST['email']) && isset($_POST['password'])) {
    $connection = (new \App\DatabaseConnection())->getConnection();

    $stmt = $connection->prepare('SELECT * FROM `user` WHERE email = ?');

    $stmt->bind_param('s', $_POST['email']);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();

        if (password_verify($_POST['password'], $user['password'])) {
            $_SESSION['email'] = $user['email'];
            header('Location: index.php');
            exit();
        }
    }
}
