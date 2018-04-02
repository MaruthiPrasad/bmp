<?php 
ini_set('display_errors', 1);
error_reporting(E_ALL);


$string = 'zeeshan';
$reverse = '';
$i = 0;
while(!empty($string[$i])){ 
    $reverse = $string[$i].$reverse; 
    $i++;
}
echo $reverse;
?>