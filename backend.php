<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['FirstName'];
    $surname = $_POST['LastName'];
    $email = $_POST['email'];
    $loginPin = $_POST['loginPin'];

    // Here you can process the data as needed, such as saving it to a database

    echo "Data received and processed successfully";
} else {
    echo "Invalid request";
}
?>
