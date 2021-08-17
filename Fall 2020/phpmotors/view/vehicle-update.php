<?php
//checks that a client is "loggedin" AND has a clientLevel greater than "1" to access the view
if (isset($_SESSION['loggedin']) === TRUE && $_SESSION['clientData']['clientLevel'] > 1) {
    //do nothing
} else {
    header('Location: /phpmotors/index.php');
}

// Build the classifications option list
$classificationList = '<select name="classificationId" id="classificationId">';
$classificationList .= "<option>Choose a Car Classification</option>";
foreach ($classifications as $classification) {
    $classificationList .= "<option value='$classification[classificationId]'";
    if (isset($classificationId)) {
        if ($classification['classificationId'] === $classificationId) {
            $classificationList .= ' selected ';
        }
    } elseif (isset($invInfo['classificationId'])) {
        if ($classification['classificationId'] === $invInfo['classificationId']) {
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
    <title><?php if (isset($invInfo['invMake']) && isset($invInfo['invModel'])) {
                echo "Modify $invInfo[invMake] $invInfo[invModel]";
            } elseif (isset($invMake) && isset($invModel)) {
                echo "Modify $invMake $invModel";
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
            <h1>
                <?php if (isset($invInfo['invMake']) && isset($invInfo['invModel'])) {
                    echo "Modify $invInfo[invMake] $invInfo[invModel]";
                } elseif (isset($invMake) && isset($invModel)) {
                    echo "Modify$invMake $invModel";
                } ?>
            </h1>
            <!-- Displays a message if needed -->
            <?php
            if (isset($message)) {
                echo $message;
            }
            ?>
            <p>Update exisitng vehicle</p>
            <form id="updateVehicle" action="/phpmotors/vehicles/index.php" method="post">
                <label for="classificationId" name="classificationId" id="classificationId">Classification: </label>
                <?php echo $classificationList; ?>
                <label for="invMake">Make: </label>
                <input type="text" name="invMake" id="invMake" required <?php if (isset($invMake)) {
                                                                            echo "value='$invMake'";
                                                                        } elseif (isset($invInfo['invMake'])) {
                                                                            echo "value='$invInfo[invMake]'";
                                                                        } ?>>

                <label for="invModel">Model: </label>
                <input type="text" name="invModel" id="invModel" required <?php if (isset($invModel)) {
                                                                                echo "value='$invModel'";
                                                                            } elseif (isset($invInfo['invModel'])) {
                                                                                echo "value='$invInfo[invModel]'";
                                                                            } ?>>
                <label for="invDescription">Description: </label>
                <textarea name="invDescription" id="invDescription" rows="4" required><?php if (isset($invDescription)) {
                                                                                            echo $invDescription;
                                                                                        } elseif (isset($invInfo['invDescription'])) {
                                                                                            echo $invInfo['invDescription'];
                                                                                        } ?></textarea>
                <label for="invImage">Image: </label>
                <input type="text" name="invImage" id="invImage" value="phpmotors/images/no-image.png" required <?php if (isset($invImage)) {
                                                                                                                    echo "value='$invImage'";
                                                                                                                } elseif (isset($invInfo['invImage'])) {
                                                                                                                    echo "value='$invInfo[invImage]'";
                                                                                                                } ?>>
                <label for="invThumbnail">Thumbnail: </label>
                <input type="text" name="invThumbnail" id="invThumbnail" value="phpmotors/images/no-image.png" required <?php if (isset($invThumbnail)) {
                                                                                                                            echo "value='$invThumbnail'";
                                                                                                                        } elseif (isset($invInfo['invThumbnail'])) {
                                                                                                                            echo "value='$invInfo[invThumbnail]'";
                                                                                                                        } ?>>
                <label for="invPrice">Price: </label>
                <input type="number" name="invPrice" id="invPrice" min="0" step="0.01" required <?php if (isset($invPrice)) {
                                                                                                    echo "value='$invPrice'";
                                                                                                } elseif (isset($invInfo['invPrice'])) {
                                                                                                    echo "value='$invInfo[invPrice]'";
                                                                                                } ?>>
                <label for="invStock">Stock: </label>
                <input type="number" name="invStock" id="invStock" min="0" required <?php if (isset($invStock)) {
                                                                                        echo "value='$invStock'";
                                                                                    } elseif (isset($invInfo['invStock'])) {
                                                                                        echo "value='$invInfo[invStock]'";
                                                                                    } ?>>
                <label for="invColor">Color: </label>
                <input type="text" name="invColor" id="invColor" required <?php if (isset($invColor)) {
                                                                                echo "value='$invColor'";
                                                                            } elseif (isset($invInfo['invColor'])) {
                                                                                echo "value='$invInfo[invColor]'";
                                                                            } ?>>
                <input value="Update Vehicle" id="submitVehicle" type="submit" name="submit">
                <input type="hidden" name="action" value="updateVehicle">
                <input type="hidden" name="invId" value="
                        <?php if (isset($invInfo['invId'])) {
                            echo $invInfo['invId'];
                        } elseif (isset($invId)) {
                            echo $invId;
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