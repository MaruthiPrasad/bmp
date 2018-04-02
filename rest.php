<?php 
ini_set('display_errors', 1);
error_reporting(E_ALL); 

header("Content-Type:application/json");
$response = array(
    'status' => 'success'
);

if(!empty($_POST)) {
    $response['data'] = $_POST;
}
echo json_encode($response);
?>