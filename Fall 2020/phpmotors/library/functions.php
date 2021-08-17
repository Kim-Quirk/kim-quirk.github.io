<?php

function checkEmail($clientEmail)
{
    $valEmail = filter_var($clientEmail, FILTER_VALIDATE_EMAIL);
    return $valEmail;
}


// Check the password for a minimum of 8 characters,
// at least one 1 capital letter, at least 1 number and
// at least 1 special character
function checkPassword($clientPassword)
{
    $pattern = '/^(?=.*[[:digit:]])(?=.*[[:punct:]])(?=.*[A-Z])(?=.*[a-z])([^\s]){8,}$/';
    return preg_match($pattern, $clientPassword);
}

// Build a navigation bar using the $classifications array
function makeNav($classifications)
{
    $navList = '<ul>';
    $navList .= "<li><a href='/phpmotors/' title='View the PHP Motors home page'>Home</a></li>";
    foreach ($classifications as $classification) {
        $navList .= "<li><a href='/phpmotors/vehicles/?action=classificationView&classificationName=" . urlencode($classification['classificationName']) . "' title='View our $classification[classificationName] lineup of vehicles'>$classification[classificationName]</a></li>";
    }
    $navList .= '</ul>';
    return $navList;
}

// Build the classifications select list 
function buildClassificationList($classifications)
{
    $classificationList = '<select name="classificationId" id="classificationList">';
    $classificationList .= "<option>Choose a Classification</option>";
    foreach ($classifications as $classification) {
        $classificationList .= "<option value='$classification[classificationId]'>$classification[classificationName]</option>";
    }
    $classificationList .= '</select>';
    return $classificationList;
}

function buildVehiclesDisplay($vehicles)
{
    $dv = '<ul id="inv-display">';
    foreach ($vehicles as $vehicle) {
        $USPrice = number_format($vehicle['invPrice'], 2);
        $dv .= '<li>';
        $dv .= "<a href='/phpmotors/vehicles/?action=vehicleInfo&invId=" . urlencode($vehicle['invId']) . "'><img src='$vehicle[invThumbnail]' alt='Image of $vehicle[invMake] $vehicle[invModel] on phpmotors.com'></a>";
        $dv .= '<hr>';
        $dv .= "<a href='/phpmotors/vehicles/?action=vehicleInfo&invId=" . urlencode($vehicle['invId']) . "'><h2>$vehicle[invMake] $vehicle[invModel]</h2></a>";
        $dv .= "<span>$$USPrice</span>";
        $dv .= '</li>';
    }
    $dv .= '</ul>';
    return $dv;
}

function buildVehicleInfoDisplay($vehicle)
{
    $USPrice = number_format($vehicle['invPrice'], 2);
    $dv = "<img src='$vehicle[invImage]' id='infoImage' alt='Image of $vehicle[invMake] $vehicle[invModel] on phpmotors.com'>";
    $dv .= "<p>Price: $$USPrice</p>";
    $dv .= '<hr id="line">';
    $dv .= "<h2>$vehicle[invMake] $vehicle[invModel] Details</h2>";
    $dv .= "<p class='greyInfo'>$vehicle[invDescription]</p>";
    $dv .= "<p>Color: $vehicle[invColor]</p>";
    $dv .= "<p class='greyInfo'>Number in Stock: $vehicle[invStock]</p>";
    return $dv;
}
