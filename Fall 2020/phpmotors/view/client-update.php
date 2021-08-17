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
    <title>Update Account Information | PHPMotors.com</title>
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
            <h1 id="pageTitle">Update Account Information</h1>
            
            <!-- Displays a message if needed -->
            <?php
            if (isset($message)) {
                echo $message;
            }
            ?>

            <h3>Update Account Info</h3>
            <!-- Update account information -->
            <form id="accountUpdate" action="/phpmotors/accounts/index.php" method="post">
                <label for="clientFirstname">First name: </label>
                <input type="text" name="clientFirstname" id="clientFirstname" required
                    value="<?php 
                    if (isset($_SESSION['clientData']['clientFirstname'])) 
                    { 
                        echo $_SESSION['clientData']['clientFirstname']; 
                    }  
                    ?>"
                >
                <label for="clientLastname">Last name: </label>
                <input type="text" name="clientLastname" id="clientLastname" required
                    value="<?php 
                    if (isset($_SESSION['clientData']['clientLastname'])) 
                        { 
                            echo $_SESSION['clientData']['clientLastname']; 
                        }  
                    ?>"
                >
                <label for="clientEmail">Email: </label>
                <input type="email" name="clientEmail" id="clientEmail" required
                    value="<?php 
                    if (isset($_SESSION['clientData']['clientEmail'])) 
                    {
                        echo $_SESSION['clientData']['clientEmail']; 
                    }  
                    ?>"
                >
                <input value="Update Information" id="updateButton" type="submit" name="submit">
                <input type="hidden" name="action" value="accountUpdate">
                <input type="hidden" name="clientId" value="<?php 
                                                    if (isset($_SESSION['clientData']['clientId'])) 
                                                    { 
                                                        echo $_SESSION['clientData']['clientId']; 
                                                        }  
                                                    ?>">
            </form>

            <h3>Change Password</h3>
            <!-- Change password -->
            <form id="changePassword" action="/phpmotors/accounts/index.php" method="post">
                <label for="clientPassword">Password: </label>
                <span id="password1">Passwords must be at least 8 characters and contain at least 1 number, 1 capital letter and 1 special character.</span>
                <br />
                <span id="password2">*note your original password will be changed.</span>
                <input type="password" name="clientPassword" id="clientPassword" required pattern="(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$">
                <input value="Update Password" id="passwordButton" type="submit" name="submit">
                <input type="hidden" name="action" value="passwordUpdate">
                <input type="hidden" name="clientId" value="<?php 
                                                    if (isset($_SESSION['clientData']['clientId'])) 
                                                    { 
                                                        echo $_SESSION['clientData']['clientId']; 
                                                        }  
                                                    ?>">
            </form>
        </main>
        <hr>
        <footer>
            <?php require $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/footer.php'; ?>

        </footer>
    </div><!-- Wrapper ends -->
</body>

</html>