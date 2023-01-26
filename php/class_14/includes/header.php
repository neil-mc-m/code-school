<?php
$links = [
    '/class_14/' => 'Home',
    '/class_14/contact.php' => 'Contact Us',
    '/class_14/products.php' => 'Products'
];

$links2 = [
        'apples', 'oranges'
]
?>
<header>
  <h1>MAIN TITLE</h1>
  <nav>
      <?php
          foreach ($links as $key => $value) {
            echo "<li><a href='$key'>$value</a></li>";
          }
      ?>
  </nav>
</header>
