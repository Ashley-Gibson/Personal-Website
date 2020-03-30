/* Page Load
*  {
*         Get array all images from "camera" folder
*         Assign randomly to an image within ".photographyTable a"
*         Render all images but set inactive ones as "display:none;"
*  }
*
*  Define left and right arrow for setting active and inactive images (sets of 15)
*  Create transition for left and right arrow to move between images
*/


$(document).ready(function ()
{
    // Refactor 'allImages' to get all images in the camera directory
    var allImages = new Array();
    allImages[0] = "images/camera/lightCinema.png";
    allImages[1] = "images/camera/owenBuilding.png";
    allImages[2] = "images/camera/crookedSpire.png";
    allImages[3] = "images/camera/moorMarket.png";
    allImages[4] = "images/camera/quakerOats.png";
    allImages[5] = "images/camera/sheffieldSheafValleyPathMoss.png";
    allImages[6] = "images/camera/botanicalGardens.png";
    allImages[7] = "images/camera/meStudying.png";
    allImages[8] = "images/camera/meSheffieldLandscape.png";
    allImages[9] = "images/camera/sheffieldLanscape.png";
    allImages[10] = "images/camera/sheafValleyPark.png";
    allImages[11] = "images/camera/nottinghamTrentBridge.png";
    allImages[12] = "images/camera/sheffieldTrainStation.png";
    allImages[13] = "images/camera/nottinghamTrams.png";
    allImages[14] = "images/camera/sheffieldWaterFountain.png";

    var imageList = $('.photographyTable a').find("img");
    
    var randomNumbers = [];
    var totalImageCount = 15;
    while (randomNumbers.length < totalImageCount) {
        var randomInt = (Math.floor(Math.random() * totalImageCount) + 1) - 1;
        if (randomNumbers.indexOf(randomInt) === -1) {
            randomNumbers.push(randomInt);
            imageList[randomNumbers.length - 1].src = allImages[randomInt];            
        }
    }
});

function photographyTable_leftArrow() {

}

function photographyTable_rightArrow() {

}