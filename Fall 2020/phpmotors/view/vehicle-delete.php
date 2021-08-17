<?php
//checks that a client is "loggedin" AND has a clientLevel greater than "1" to access the view
if (isset($_SESSION['loggedin']) === TRUE && $_SESSION['clientData']['clientLevel'] > 1) {
    //do nothing
} else {
    header('Location: /phpmotors/index.php');
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <link type="text/css" rel="stylesheet" href="/phpmotors/css/style.css" media="screen">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php if (isset($invInfo['invMake'])) {
                echo "Delete $invInfo[invMake] $invInfo[invModel]";
            } ?> | PHPMotors.com</title>
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
            <h1><?php if (isset($invInfo['invMake'])) {
                    echo "Delete $invInfo[invMake] $invInfo[invModel]";
                } ?>
            </h1>
            <!-- Displays a message if needed -->
            <?php
            if (isset($message)) {
                echo $message;
            }
            ?>
            <p>Confirm Vehicle Deletion. The delete is permanent.</p>
            <form id="deleteVehicle" action="/phpmotors/vehicles/index.php" method="post">
                <label for="invMake">Make: </label>
                <input type="text" name="invMake" id="invMake" readonly <?php if (isset($invInfo['invMake'])) {
                                                                                        echo "value='$invInfo[invMake]'";
                                                                                    } ?>>

                <label for="invModel">Model: </label>
                <input type="text" name="invModel" id="invModel" readonly <?php if (isset($invInfo['invModel'])) {
                                                                                        echo "value='$invInfo[invModel]'";
                                                                                    } ?>>
                <label for="invDescription">Description: </label>
                <textarea name="invDescription" id="invDescription" rows="4" readonly><?php if (isset($invInfo['invDescription'])) {
                                                                                                    echo $invInfo['invDescription'];
                                                                                                } ?></textarea>
                <input value="Delete Vehicle" id="submitVehicle" type="submit" name="submit">
                <input type="hidden" name="action" value="deleteVehicle">
                <input type="hidden" name="invId" value="
                        <?php if (isset($invInfo['invId'])) {
                            echo $invInfo['invId'];
                        } ?>
                        ">
            </form>
        </main>
        <hr>
        <footer>
            <?php require $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/footer.php'; ?>

        </footer>
    </div><!-- Wrapper ends -->
</body>

</html>