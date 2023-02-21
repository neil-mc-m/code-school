<?php
session_start();
require_once './src/DatabaseConnection.php';

if (isset($_POST['email']) && isset($_POST['password'])) {
    $connection = (new \App\DatabaseConnection())->getConnection();

    $stmt = $connection->prepare('SELECT * FROM user WHERE `email` = ? && `password` = ?');
    $stmt->bind_param('ss', $_POST['email'], $_POST['password']);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        $_SESSION['userId'] = $user['id'];
        header('Location: index.php');
        exit();
    }
}
