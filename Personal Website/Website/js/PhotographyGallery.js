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
    $('.galleryPage1').css("display", "flex");
    var imageList = $('.photographyTable a').find("img");

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
    allImages[15] = "images/camera/miamiBeachSunrise.png";
    allImages[16] = "images/camera/grandadNearEyam.png";
    allImages[17] = "images/camera/sunsetBrimington.png";
    allImages[18] = "images/camera/fairviewLakeSilhouette.png";
    allImages[19] = "images/camera/sheffieldVarsity.png";
    allImages[20] = "images/camera/westwoodBluebells.png";
    allImages[21] = "images/camera/flatIronNewYork.png";
    allImages[22] = "images/camera/westwoodTrees.png";
    allImages[23] = "images/camera/timeSquareAtNight.png";
    allImages[24] = "images/camera/stonyManShenandoah.png";
    allImages[25] = "images/camera/fairviewSwampWalk.png";
    allImages[26] = "images/camera/grandadRingwoodLake.png";
    allImages[27] = "images/camera/chesterfieldCanalLandscape.png";
    allImages[28] = "images/camera/westonParkSheffield.png";
    allImages[29] = "images/camera/muzzyHandstandCentralPark.png";
    allImages[30] = "images/camera/jackDanielsFactory.png";
    allImages[31] = "images/camera/steelBallsSheffield.png";
    allImages[32] = "images/camera/delawareCanoe.png";
    allImages[33] = "images/camera/sheafValleyPark.png";
    allImages[34] = "images/camera/harryPotterUniversalStudiosFlorida.png";
    allImages[35] = "images/camera/fairviewETC.png";
    allImages[36] = "images/camera/skylineDriveShenandoah.png";
    allImages[37] = "images/camera/miamiBeachPier.png";
    allImages[38] = "images/camera/brimingtonCountrysideEdited.png";
    allImages[39] = "images/camera/miamiBeachGymMorning.png";
    allImages[40] = "images/camera/destinBeachFlorida.png";
    allImages[41] = "images/camera/fairviewPepsiCan.png";
    allImages[42] = "images/camera/sheffieldChineseSideStreet.png";
    allImages[43] = "images/camera/fairviewLakeRidge.png";
    allImages[44] = "images/camera/sunriseRidgeHike.png";
    
    var randomNumbers = [];
    var totalImageCount = 45;
    while (randomNumbers.length < totalImageCount) {
        var randomInt = (Math.floor(Math.random() * totalImageCount) + 1) - 1;
        if (randomNumbers.indexOf(randomInt) === -1) {
            randomNumbers.push(randomInt);                           
        }
    }

    for (var i = 0; i < totalImageCount; i++) {
        imageList[i].src = allImages[randomNumbers[i]]; 
    }
});

function photographyTable_leftArrow() {
    if (!$('.galleryPage1').hasClass('galleryPage-closed')) {
        $('.galleryPage1').addClass('galleryPage-closed');
        $('.galleryPage1').css("display", "none");
        $('.galleryPage3').css("display", "flex");
        $('.galleryPage3').removeClass('galleryPage-closed');
    }
    else if (!$('.galleryPage2').hasClass('galleryPage-closed')) {
        $('.galleryPage2').addClass('galleryPage-closed');
        $('.galleryPage2').css("display", "none");
        $('.galleryPage1').css("display", "flex");
        $('.galleryPage1').removeClass('galleryPage-closed');
    }
    else if (!$('.galleryPage3').hasClass('galleryPage-closed')) {
        $('.galleryPage3').addClass('galleryPage-closed');
        $('.galleryPage3').css("display", "none");
        $('.galleryPage2').css("display", "flex");
        $('.galleryPage2').removeClass('galleryPage-closed');
    }
}

function photographyTable_rightArrow() {
    if (!$('.galleryPage1').hasClass('galleryPage-closed')) {
        $('.galleryPage1').addClass('galleryPage-closed');
        $('.galleryPage1').css("display", "none");
        $('.galleryPage2').css("display", "flex");
        $('.galleryPage2').removeClass('galleryPage-closed');
    }
    else if (!$('.galleryPage2').hasClass('galleryPage-closed')) {
        $('.galleryPage2').addClass('galleryPage-closed');
        $('.galleryPage2').css("display", "none");
        $('.galleryPage3').css("display", "flex");
        $('.galleryPage3').removeClass('galleryPage-closed');
    }
    else if (!$('.galleryPage3').hasClass('galleryPage-closed')) {
        $('.galleryPage3').addClass('galleryPage-closed');
        $('.galleryPage3').css("display", "none");
        $('.galleryPage1').css("display", "flex");
        $('.galleryPage1').removeClass('galleryPage-closed');
    }
}