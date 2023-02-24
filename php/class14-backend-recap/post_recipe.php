// an example of how you might write the php code to post a recipe to the mysql database
// and also secure the page from unwanted logged in users
<?php
session_start();
require_once './src/DatabaseConnection.php';

if (!isset($_SESSION['email'])) {
    header('Location: index.php', false, 403);
    exit();
}

$loggedInUser = $_SESSION['email'];
$connection = (new \App\DatabaseConnection())->getConnection();
$statement = $connection->prepare('SELECT * from user where email = ?;');
$statement->bind_param('s', $loggedInUser);
$statement->execute();

$result = $statement->get_result();

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();

    if ($user['role'] != 'admin') {
        header('Location: index.php', true, 403);
        exit();
    }
}

if (isset($_POST['name']) && isset($_POST['description'])) {
    $connection = (new \App\DatabaseConnection())->getConnection();
    $statement = $connection->prepare('INSERT INTO recipe_list (name, description) VALUES (?,?);');
    $statement->bind_param('ss', $_POST['name'], $_POST['description']);
    $hasPosted = $statement->execute();

    if ($hasPosted) {
        $message = 'Success';
    } else {
        $message = 'failed';
    }
}
