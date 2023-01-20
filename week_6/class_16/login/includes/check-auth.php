<?php

include './debug.php';

if (!isset($_SESSION['user']['id'])) {
    header("Location: ./login.php");
    exit();
}
