<?php
session_start();
$_SESSION = [];
setcookie("PHPSESSID", "", time() - 3600, "/");
session_destroy();
header('Location: index.php');
exit;
