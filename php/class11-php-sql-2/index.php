<?php
// search form
$databasePassword = 'J_g]6!uv]@XHUmf8';
$databaseUser = 'php-user';
$databaseHost = 'localhost';
$database = 'recipes';


if (isset($_GET['q'])) {
    // how to calculate the difference in days between 2 dates
    // the variable $diff should contain the number of days between the 2 dates
    $startDate = new DateTime('2023-02-16');
    $endDate = new DateTime('2023-02-23');
    $diff = $startDate->diff($endDate)->d;

    //step 1 - create the connection to the DB
    $connection = new mysqli($databaseHost, $databaseUser, $databasePassword, $database);

    // step 2 - prepare the statement
    $statement = $connection->prepare('SELECT * from recipe_list WHERE `name` = ?');

    // step 3 - bind parameters to the statement and execute statement
    $statement->bind_param('s', $_GET['q']);
    $statement->execute();

    // step 4 - retrieve the result
    $result = $statement->get_result();

    // step 5 - check for number of results and fetch into a php format (an array usually)
    if ($result->num_rows > 0) {

        $recipe = $result->fetch_assoc();

        $recipeId = $recipe['id'];

        $recipeName = $recipe['name'];

        $recipeDescription = $recipe['description'];
    }

    if ($result->num_rows === 0) {

        $noResults = "<p>No results found</p>";

    }
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

        <label for="search">Search</label>
        <input id="search" name="q" placeholder="Search recipes" type="text"/>

        <select name="room_type">
            <option value="double">double</option>
            <option value="single">single</option>
        </select>

        <button type="submit">Search</button>

    </form>


</section>
<section class="container">
    <div>
        <h1>Search results</h1>
        <?php
        if (isset($recipeName) && isset($recipeDescription) && isset($recipeId)) {

            echo "<p>$recipeName</p>";

            echo "<p>$recipeDescription</p>";

            echo "<a href='ingredients.php?id=$recipeId'>See ingredients</a>";
        }

        if (isset($noResults)) {

            echo $noResults;

        }
        ?>
    </div>
</section>
</body>
</html>