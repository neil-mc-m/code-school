<?php
define('DOMAIN', 'https://thewebsitedomain.com');

$title = 'home page';
?>

<!DOCTYPE html>
<html>
<?php include './includes/head.php';?>
<body>
    <?php include './includes/header.php'; ?>
<main>
    <p>This is the main content <?php echo DOMAIN;?></p>
</main>

</body>

<footer>
    <?php include './includes/footer.php' ?>
</footer>
</html>