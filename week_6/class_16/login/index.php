<?php
session_start();
if (!isset($_COOKIE['authenticated'])) {
    header("Location: ./login.php");
}
?>

<!DOCTYPE html>
<html lang="en">
<body>

<header>
    <?php include 'includes/nav.php';?>
</header>
<main>
    <p>Home page</p>
</main>

</body>
</html>

