<?php
/**
 * Method One
 */
$a =  $a + $b;  // 5 + 6 = 11
$b = $a - $b;   // 11 - 6 = 5
$a = $a - $b;  // 11 - 5 = 6
print $a . ',' . $b;


/**
 * Method Two
 */
$a = 5;
$b = 6;
list($a, $b) = array($b, $a);
print $a . ',' . $b;