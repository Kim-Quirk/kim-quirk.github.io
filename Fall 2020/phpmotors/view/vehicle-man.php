<?php
if (isset($_SESSION['loggedin']) === TRUE && $_SESSION['clientData']['clientLevel'] > 1) {
    //do nothing
} else {
    header('Location: /phpmotors/index.php');
}

if (isset($_SESSION['message'])) {
    $message = $_SESSION['message'];
   }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <link type="text/css" rel="stylesheet" href="/phpmotors/css/style.css" media="screen">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vehicle Management | PHPMotors.com</title>
</head>

<body>
    <div id="wrapper">
        <header>
            <?php require $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/header.php'; ?>
        </header>
        <nav id="mainNav">
            <?php echo $navList; ?>
        </nav>
        <main>
            <h1 id="pageTitle">Vehicle Management</h1>
            <ul>
                <li><a href="/phpmotors/vehicles/index.php?action=classification" title="Click here to add a vehicle classification">Add Classificaiton</a></li>
                <li><a href="/phpmotors/vehicles/index.php?action=vehicle" title="Click here to add a vehicle">Add Vehicle</a></li>
            </ul>
            <?php
            if (isset($message)) {
                echo $message;
            }
            if (isset($classificationList)) {
                echo '<h2>Vehicles By Classification</h2>';
                echo '<p>Choose a classification to see those vehicles</p>';
                echo $classificationList;
            }
            ?>
            <noscript>
                <p><strong>JavaScript Must Be Enabled to Use this Page.</strong></p>
            </noscript>
            <table id="inventoryDisplay"></table>
        </main>
        <hr>
        <footer>
            <?php require $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/footer.php'; ?>

        </footer>
    </div><!-- Wrapper ends -->
    <script src="../js/inventory.js"></script>
</body>

</html> <?php unset($_SESSION['message']); ?>