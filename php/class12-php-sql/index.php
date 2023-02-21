<?php

$databasePassword = 'J_g]6!uv]@XHUmf8';
$databaseUser = 'php-user';
$databaseHost = 'localhost';
$database = 'recipes';

$connection = new mysqli($databaseHost, $databaseUser, $databasePassword, $database);


// method 1 - retrieving lists of data - no variable parameters
$result = $connection->query('SELECT * from recipe_list;');
if ($result->num_rows > 0) {

    $results = [];
    while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
        $results[] = $row;
    }

    echo "<pre>";
    var_dump($results);
    echo "</pre>";
}

// method 2 - retrieving lists of data - with variable parameters
$connection = new mysqli($databaseHost, $databaseUser, $databasePassword, $database);
$statement = $connection->prepare('SELECT * from recipe_list WHERE `name` = ?');
$statement->bind_param('s', $_GET['q']);
$statement->execute();

// step 4 - retrieve the result
$result = $statement->get_result();
if ($result->num_rows > 0) {

    // create an array of associative arrays
    $results = [];
    while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
        $results[] = $row;
    }

    echo "<pre>";
    var_dump($results);
    echo "</pre>";
}

// method 3 - retrieving lists of data - with variable parameters
$connection = new mysqli($databaseHost, $databaseUser, $databasePassword, $database);
$statement = $connection->prepare('SELECT * from recipe_list WHERE `name` = ? and `password` = ?');
$statement->bind_param('ss', $_GET['q'], $_GET['password']);
$statement->execute();

// step 4 - retrieve the result
$results = $statement->get_result();
if ($results->num_rows > 0) {

    foreach ($results as $recipe) {
        echo "<pre>";
        var_dump($recipe);
        echo "</pre>";
    }
}