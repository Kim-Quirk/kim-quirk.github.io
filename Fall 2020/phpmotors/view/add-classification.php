<?php
//checks that a client is "loggedin" AND has a clientLevel greater than "1" to access the view
if (isset($_SESSION['loggedin']) === TRUE && $_SESSION['clientData']['clientLevel'] > 1) {
    //do nothing
} else {
    header('Location: /phpmotors/index.php');
}
?><!DOCTYPE html>
<html lang="en">

<head>
    <link type="text/css" rel="stylesheet" href="/phpmotors/css/style.css" media="screen">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Classification | PHPMotors.com</title>
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
            <h1 id="pageTitle">Add Car Classification</h1>
            <!-- Displays a message if needed -->
            <?php
            if (isset($message)) {
                echo $message;
            }
            ?>
            <form id="addClass" action="/phpmotors/vehicles/index.php" method="post">
                <label for="classificationName">Classification Name: </label>
                <input type="text" name="classificationName" id="classificationName" required <?php if(isset($classificationName)){echo "value='$classificationName'";}?> >
                <input value="Add Classification" id="submitClass" type="submit" name="submit">
                <input type="hidden" name="action" value="addClass">
            </form>
        </main>
        <hr>
        <footer>
            <?php require $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/footer.php'; ?>

        </footer>
    </div><!-- Wrapper ends -->
</body>

</html>