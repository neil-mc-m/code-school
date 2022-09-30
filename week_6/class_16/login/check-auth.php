<?php

if (!isset($_COOKIE['authenticated'])) {
    header("Location: ./login.php");
}
