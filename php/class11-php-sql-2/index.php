<?php
// im editing this file
// search form
$databasePassword = 'J_g]6!uv]@XHUmf8';
$databaseUser = 'php-user';
$databaseHost = 'localhost';
$database = 'recipes';

if (isset($_POST['q'])) {
    var_dump($_POST['q']);
    $connection = new mysqli($databaseHost, $databaseUser, $databasePassword, $database);
    var_dump($connection);
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Title</title>
</head>
<body>
<section class="container">


    <form action="" method="GET">
        <label for="username">Username</label>
        <input id="username" name="q" placeholder="Search recipes" type="text"/>

        <button type="submit">Search</button>
    </form>

</section>
</body>
</html>
