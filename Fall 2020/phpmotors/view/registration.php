<!DOCTYPE html>
<html lang="en">

<head>
    <link type="text/css" rel="stylesheet" href="/phpmotors/css/style.css" media="screen">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration | PHPMotors.com</title>
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
            <h1 id="pageTitle">Create an Account</h1>

            <!-- Displays a message if needed -->
            <?php
            if (isset($_SESSION['message'])) {
                echo $_SESSION['message'];
            }
            ?>

            <form id="logIn" action="/phpmotors/accounts/index.php" method="post">
                <label for="clientFirstname">First name: </label>
                <input type="text" name="clientFirstname" id="clientFirstname" required <?php if (isset($clientFirstname)) {
                                                                                            echo "value='$clientFirstname'";
                                                                                        }  ?>>
                <label for="clientLastname">Last name: </label>
                <input type="text" name="clientLastname" id="clientLastname" required <?php if (isset($clientLastname)) {
                                                                                            echo "value='$clientLastname'";
                                                                                        }  ?>>
                <label for="clientEmail">Email: </label>
                <input type="email" name="clientEmail" id="clientEmail" required placeholder="Enter a valid email address" <?php if (isset($clientEmail)) {
                                                                                                                                echo "value='$clientEmail'";
                                                                                                                            }  ?>>
                <label for="clientPassword">Password: </label>
                <span id="password">Passwords must be at least 8 characters and contain at least 1 number, 1 capital letter and 1 special character.</span>
                <input type="password" name="clientPassword" id="clientPassword" required pattern="(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$">
                <input value="Register" id="signIn" type="submit" name="submit">
                <input type="hidden" name="action" value="register">
            </form>

        </main>
        <hr>
        <footer>
            <?php require $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/footer.php'; ?>

        </footer>
    </div><!-- Wrapper ends -->
</body>

</html>