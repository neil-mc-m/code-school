<?php
session_start();
session_destroy();
setcookie('authenticated', null);
header('Location: ./index.php');
exit;
