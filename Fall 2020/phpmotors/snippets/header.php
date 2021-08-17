<div id="top-header">
    <img src="/phpmotors/images/site/logo.png" alt="PHP Motors Logo" id="logo">
    <?php
    if (isset($cookieFirstname)) {
        echo "<span id='welcomeBack'>Welcome $cookieFirstname</span>";
    }
    ?>
    <?php
    if (isset($_SESSION['loggedin']) === TRUE) {
        echo "<a href='/phpmotors/accounts/index.php?action=Logout' title='Logout of current account' id='acc'>Logout</a>";
    } else {
        echo "<a href='/phpmotors/accounts/index.php?action=login-page' title='Login or Register with PHP Motors' id='acc'>My Account</a>";
    }
    ?>
</div>