<?php

$links = [
    '/code-school/week_6/class_16/login/' => 'Home',
    '/code-school/week_6/class_16/login/contact.php' => 'Contact Us',
    '/code-school/week_6/class_16/login/products.php' => 'Products'
];
?>

<nav>
    <?php
        foreach ($links as $key => $value) {
            echo "<li><a href='$key'>$value</a></li>";
        }
        if (isset($_SESSION['loggedInName'])) {
            echo "<p>Welcome {$_SESSION['loggedInName']}</p>";
            echo "<a href='logout.php'>Logout</a>";
        }
    ?>
</nav>
