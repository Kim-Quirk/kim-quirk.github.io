<!DOCTYPE html>
<html lang="en">

<head>
    <link type="text/css" rel="stylesheet" href="/phpmotors/css/style.css" media="screen">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign In | PHPMotors.com</title>
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
            <h1 id="pageTitle">Sign In</h1>

            <!-- Displays a message if needed -->
            <?php
            if (isset($_SESSION['message'])) {
                echo $_SESSION['message'];
            }
            ?>

            <form id="logIn" action="/phpmotors/accounts/" method="post">
                <label for="clientEmail">Email: </label>
                <input name="clientEmail" id="clientEmail" type="email" required <?php if (isset($clientEmail)) {
                                                                                        echo "value='$clientEmail'";
                                                                                    }  ?>>
                <label for="clientPassword">Password: </label>
                <span id="password">Passwords must be at least 8 characters and contain at least 1 number, 1 capital letter and 1 special character.</span>
                <input name="clientPassword" id="clientPassword" type="password" required pattern="(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$">
                <input value="Sign In" id="signIn" type="submit">
                <input type="hidden" name="action" value="login">
            </form>

            <a id="question" href="/phpmotors/accounts/index.php?action=register-page" title="Click here to create an account">
                <p>Not a member yet?</p>
            </a>

        </main>
        <hr>
        <footer>
            <?php require $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/footer.php'; ?>

        </footer>
    </div><!-- Wrapper ends -->
</body>

</html>