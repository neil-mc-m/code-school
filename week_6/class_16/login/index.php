<?php
session_start();

if (isset($_POST['name'])) {
    $_SESSION['user_name'] = $_POST['name'];
}
?>

<!DOCTYPE html>
<html lang="en">

<link rel="stylesheet" href="css/main.css">
<body>
<?php if (isset($_SESSION['user_name'])) { ?>
    <div>logged in as <?php echo $_SESSION['user_name'] ?></div>
    <a href="logout.php">logout</a>
<?php } else { ?>
    <div>Please login</div>
    <a href="login.php">Login</a>
<?php } ?>

<!-- end of section -->
</body>
</html>

