<?php


if (isset($_POST['username']) && isset($_POST['password'])) {
    var_dump($_POST);
} else {
    $error = 'wrong combination';
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


    <form class="signup-form" action="" method="POST">
        <label for="username">Username</label>
        <input id="username" name="username" placeholder="Username" type="text"/>

        <label for="password"> Password </label>
        <input id="password" name="password" placeholder="Password" type="password"/>

        <button id="signupButton" type="submit">Login</button>

    </form>


</section>
</body>
</html>
