<?php 
$list_emails = array(
    'ab@1c@gmail.com', 'dafdf@a@yahoo.com', 'maru@gmail.com', 'sdfa@live.com', 'prasa@yahoo.com',
);
$result = array();
foreach ($list_emails as $email) {
    $email_data = explode('@', $email);
    $domain = end($email_data);
    if (key_exists($domain, $result)) {
       $result[$domain] = $result[$domain] + 1; 
    } else {
        $result[$domain] = 1;
    }
}
print_r($result);
?>