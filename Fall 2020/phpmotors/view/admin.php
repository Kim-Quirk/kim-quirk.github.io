<?php
if (isset($_SESSION['loggedin']) === FALSE) {
    header('Location: /phpmotors/index.php');
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <link type="text/css" rel="stylesheet" href="/phpmotors/css/style.css" media="screen">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin | PHPMotors.com</title>
</head>

<body>
    <div id="wrapper">
        <header>
            <?php require $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/header.php'; ?>
        </header>
        <nav id="mainNav">
            <!-- <?php require $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/nav.php'; ?> -->
            <?php echo $navList; ?>
        </nav>
        <main>
            <div id="adminPage">
                <h1 id="pageTitle"><?php echo $_SESSION['clientData']['clientFirstname'], ' ', $_SESSION['clientData']['clientLastname']; ?></h1>
                <p id="loggedInMessage">You are logged in.</p>

                <!-- Displays a message if needed -->
                <?php
                if (isset($_SESSION['message'])) {
                    echo $_SESSION['message'];
                }
                ?>

                <ul>
                    <li>First name: <?php echo $_SESSION['clientData']['clientFirstname']; ?></li>
                    <li>Last name: <?php echo $_SESSION['clientData']['clientLastname']; ?></li>
                    <li>Email address: <?php echo $_SESSION['clientData']['clientEmail']; ?></li>
                </ul>
                <h3>Account Management</h3>
                <p>Use this link to update account information.</p>
                <a href="/phpmotors/accounts/index.php?action=update" tital="Click here to update account information">
                    <p>Update Account Information</p>
                </a>
                <?php
                if ($_SESSION['clientData']['clientLevel'] > 1) {
                    echo "<h3>Inventory Management</h3>
                <p>Use this link to manage the inventory</p>
                <p><a href='/phpmotors/vehicles/index.php' title='Admin page for managing vehicles'>Vehicle Mangement</a></p>";
                }
                ?>
            </div>
        </main>
        <hr>
        <footer>
            <?php require $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/footer.php'; ?>

        </footer>
    </div><!-- Wrapper ends -->
</body>

</html>