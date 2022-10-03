<?php
session_start();
include 'includes/check-auth.php';
include 'config/dbconfig.php';
include 'includes/home.php';
debug($_SESSION);

