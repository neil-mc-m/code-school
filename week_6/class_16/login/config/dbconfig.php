<?php
$password = 'IePcLP7umU2xAS)g';
$userName = 'php-user';
$databaseName = 'dublin-code-school';
$host = 'localhost';

function getConnection()
{
    $user = 'php';
    $pass = 'M4Os6]Oklr0!AgJ8';
    $databaseName = 'code-school';
    $host = 'localhost';

    return mysqli_connect($host, $user, $pass, $databaseName, 8889);
}


