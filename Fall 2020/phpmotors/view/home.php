<!DOCTYPE html>
<html lang="en">

<head>
    <link type="text/css" rel="stylesheet" href="/phpmotors/css/style.css" media="screen">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home | PHPMotors.com</title>
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
            <div id="topContent">
                <h1 id="pageTitle">Welcome to PHP Motors!</h1>
                <div id="adBox">
                    <h2>DMC Delorean</h2>
                    <p>3 Cup holders</p>
                    <p>Superman doors</p>
                    <p>Fuzzy dice!</p>
                </div>
                <div id="deloreanImage">
                    <img src="/phpmotors/images/vehicles/delorean.jpg" alt="Picture of the Delorean" id="delorean">
                </div>
                <button id="button">Own Today</button>
            </div>
            <div id="bottomContent">
                <div id="rightReviews">
                    <h3>DMC Delorean Reviews</h3>
                    <ul>
                        <li>"So fast its almost like traveling in time." (4/5)</li>
                        <li>"Coolest ride on the road." (4/5)</li>
                        <li>"I'm feeling Marty McFly!" (5/5)</li>
                        <li>"The most futurisitc ride of our day." (4.5/5)</li>
                        <li>"80's livin and I love it!" (5/5)</li>
                    </ul>
                </div>
                <div>
                    <h3 id="leftTitle">Delorean Upgrades</h3>
                    <ul id="leftUpgrades">
                        <li><img src="/phpmotors/images/upgrades/flux-cap.png" alt="Picture of the Flux Capacitor upgrade" id="flux-cap">
                            <p><a href="/phpmotors/view/home.php" title="Flux Capacitor upgrade" id="fluxLink">Flux Capacitor</a></p>
                        </li>
                        <li><img src="/phpmotors/images/upgrades/flame.jpg" alt="Picture of possible flame decals" id="flame">
                            <p><a href="/phpmotors/view/home.php" title="Flame Decals upgrade" id="flameLink">Flame Decals</a></p>
                        </li>
                        <li><img src="/phpmotors/images/upgrades/bumper_sticker.jpg" alt="Picture of a possible bumper sticker" id="sticker">
                            <p><a href="/phpmotors/view/home.php" title="Bumper Stickers upgrade" id="stickerLink">Bumper Stickers</a></p>
                        </li>
                        <li><img src="/phpmotors/images/upgrades/hub-cap.jpg" alt="Picture of a hub cap upgrade" id="hub-cap">
                            <p><a href="/phpmotors/view/home.php" title="Hub Caps upgrade" id="hubLink">Hub Caps</a></p>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
        <hr>
        <footer>
            <?php require $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/footer.php'; ?>
        </footer>
    </div><!-- Wrapper ends -->
</body>

</html>