<?php
declare(strict_types=1);

$title = 'home page';
$firstName = 'neil';
$lastName = 'mcmahon';
$username = "Username: $firstName $lastName";

$username = 'Username: ' . $firstName . 'anthony' . $lastName;

$count = 14;
$pi = 3.1417;
$is2022 = true;
$count = 12;

//if ($count < 10 || $pi > 1) {
//    echo "2 Dozen or More";
//}

$colours1 =  array("red", "green", "blue", "yellow");
$colours2 =  array("black", "white", "purple", "orange");

$allColours = array_merge($colours1, $colours2);
array_push($allColours, 'brown', 'cream');
$allColours[] = 'lightgreen';

$subColours = array_slice($allColours, 2, 4);

//for ($i = 0;$i < count($subColours); $i++) {
//    echo $subColours[$i];
//}

$ages = ["Peter" => "35", "Ben" => "37", "Joe" => "43"];

foreach ($ages as $key => $value) {
    echo "$key is the key<br>";
    echo "$value is the value<br>";
}
?>

<!DOCTYPE html>
<html>
<title><?php echo $title; ?></title>
<body>
<?php include './header.php'; ?>
</body>

</html>
