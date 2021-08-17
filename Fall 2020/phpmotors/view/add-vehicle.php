<?php
//checks that a client is "loggedin" AND has a clientLevel greater than "1" to access the view
if (isset($_SESSION['loggedin']) === TRUE && $_SESSION['clientData']['clientLevel'] > 1) {
    //do nothing
} else {
    header('Location: /phpmotors/index.php');
}

//dynamic drop down select list
$classificationList = "<label for='classificationId'>Choose Car Classification</label><select id='classificationId' name='classificationId'>";
foreach ($classifications as $classification) {
    $classificationList .= "<option value='$classification[classificationId]'";
    if(isset($classificationId)) {
        if($classification['classificationId'] === $classificationId){
            $classificationList .= ' selected ';
        }
    }
    $classificationList .= ">$classification[classificationName]</option>";
}

$classificationList .= '</select>';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <link type="text/css" rel="stylesheet" href="/phpmotors/css/style.css" media="screen">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Vehicle | PHPMotors.com</title>
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
            <h1 id="pageTitle">Add Vehicle</h1>
            <!-- Displays a message if needed -->
            <?php
            if (isset($message)) {
                echo $message;
            }
            ?>
            <form id="addVehicle" action="/phpmotors/vehicles/index.php" method="post">
                <?php echo $classificationList; ?>
                <label for="invMake">Make: </label>
                <input type="text" name="invMake" id="invMake" required <?php if (isset($invMake)) { echo "value='$invMake'";} ?>>
                <label for="invModel">Model: </label>
                <input type="text" name="invModel" id="invModel" required <?php if (isset($invModel)) {echo "value='$invModel'"; } ?>>
                <label for="invDescription">Description: </label>
                <textarea name="invDescription" id="invDescription" rows="4" required><?php if (isset($invDescription)) {echo "$invDescription";} ?></textarea>
                <label for="invImage">Image: </label>
                <input type="text" name="invImage" id="invImage" value="/phpmotors/images/vehicles/no-image.png" required <?php if (isset($invImage)) {echo "value='$invImage'";} ?>>
                <label for="invThumbnail">Thumbnail: </label>
                <input type="text" name="invThumbnail" id="invThumbnail" value="/phpmotors/images/vehicles/no-image-tn.png" required <?php if (isset($invThumbnail)) {echo "value='$invThumbnail'";} ?>>
                <label for="invPrice">Price: </label>
                <input type="number" name="invPrice" id="invPrice" min="0" step="0.01" required <?php if (isset($invPrice)) {echo "value='$invPrice'";} ?>>
                <label for="invStock">Stock: </label>
                <input type="number" name="invStock" id="invStock" min="0" required <?php if (isset($invStock)) {echo "value='$invStock'";} ?>>
                <label for="invColor">Color: </label>
                <input type="text" name="invColor" id="invColor" required <?php if (isset($invColor)) {echo "value='$invColor'";} ?>>
                <input value="Add Vehicle" id="submitVehicle" type="submit" name="submit">
                <input type="hidden" name="action" value="addVehicle">
            </form>
        </main>
        <hr>
        <footer>
            <?php require $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/footer.php'; ?>

        </footer>
    </div><!-- Wrapper ends -->
</body>

</html>