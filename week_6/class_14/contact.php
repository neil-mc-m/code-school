<?php
define('DOMAIN', 'https://thewebsitedomain.com');

$title = 'Contact us';
?>

<!DOCTYPE html>
<html>

<?php include './includes/head.php';?>

<body>
<?php include './includes/header.php'; ?>

<main>
    <p>Contact form</p>
    <form class="signup-form" action="signup.php?search-user=2" method="post">
      <label for="username">Username</label>
      <input id="username" name="username" placeholder="Username" type="text" />

      <label for="password"> Password </label>
      <input id="password" name="password" placeholder="Password" type="password" />

      <button id="signupButton" type="submit">Sign Up</button>
    </form>
    </p>
</main>
</body>

<?php include './includes/footer.php' ?>

</html>
