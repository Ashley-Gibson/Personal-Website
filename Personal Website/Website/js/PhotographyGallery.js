var randomNumbers = [];
var totalImageCount = 45;

// Refactor 'allImages' to get all images in the camera directory
var allImages = new Array();

var imageList;

var photoSet = 0;

var isMobile = false; //initiate as false

$(document).ready(function () {
    // Device Detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        isMobile = true;
    }

    if (window.location.pathname.indexOf('photography.html') != -1) {
        imageList = $('.photographyTable a').find("img");
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

        while (randomNumbers.length < totalImageCount) {
            var randomInt = (Math.floor(Math.random() * totalImageCount) + 1) - 1;
            if (randomNumbers.indexOf(randomInt) === -1) {
                randomNumbers.push(randomInt);
            }
        }

        for (var i = 0; i < 15; i++) {
            imageList[i].src = allImages[randomNumbers[i]];
        }
    }
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function photographyTable_leftArrow() {
    // Fade Out
    $('.photographyTable a').removeClass("imgFadeIn");
    $('.photographyTable a').addClass("imgFadeOut");

    // Sleep
    await sleep(800);

    if (!isMobile) {
        // Swap Images
        for (var i = 0; i < 15; i++) {
            if (photoSet === 0) {
                $(imageList[i]).attr('src', allImages[randomNumbers[i + 30]]);
            }
            else if (photoSet === 1) {
                $(imageList[i]).attr('src', allImages[randomNumbers[i]]);
            }
            else {
                $(imageList[i]).attr('src', allImages[randomNumbers[i + 15]]);
            }
        }

        // Sleep
        await sleep(200);

        if (photoSet === 0)
            photoSet = 2;
        else if (photoSet === 1)
            photoSet = 0;
        else
            photoSet = 1;
    }
    else if (isMobile) {
        // Swap Images
        for (var i = 0; i < 2; i++) {
            switch (photoSet) {
                case 0: $(imageList[i]).attr('src', allImages[randomNumbers[i + 42]]); break;
                case 1: $(imageList[i]).attr('src', allImages[randomNumbers[i]]); break;
                case 2: $(imageList[i]).attr('src', allImages[randomNumbers[i + 2]]); break;
                case 3: $(imageList[i]).attr('src', allImages[randomNumbers[i + 4]]); break;
                case 4: $(imageList[i]).attr('src', allImages[randomNumbers[i + 6]]); break;
                case 5: $(imageList[i]).attr('src', allImages[randomNumbers[i + 8]]); break;
                case 6: $(imageList[i]).attr('src', allImages[randomNumbers[i + 10]]); break;
                case 7: $(imageList[i]).attr('src', allImages[randomNumbers[i + 12]]); break;
                case 8: $(imageList[i]).attr('src', allImages[randomNumbers[i + 14]]); break;
                case 9: $(imageList[i]).attr('src', allImages[randomNumbers[i + 16]]); break;
                case 10: $(imageList[i]).attr('src', allImages[randomNumbers[i + 18]]); break;
                case 11: $(imageList[i]).attr('src', allImages[randomNumbers[i + 20]]); break;
                case 12: $(imageList[i]).attr('src', allImages[randomNumbers[i + 22]]); break;
                case 13: $(imageList[i]).attr('src', allImages[randomNumbers[i + 24]]); break;
                case 14: $(imageList[i]).attr('src', allImages[randomNumbers[i + 26]]); break;
                case 15: $(imageList[i]).attr('src', allImages[randomNumbers[i + 28]]); break;
                case 16: $(imageList[i]).attr('src', allImages[randomNumbers[i + 30]]); break;
                case 17: $(imageList[i]).attr('src', allImages[randomNumbers[i + 32]]); break;
                case 18: $(imageList[i]).attr('src', allImages[randomNumbers[i + 34]]); break;
                case 19: $(imageList[i]).attr('src', allImages[randomNumbers[i + 36]]); break;
                case 20: $(imageList[i]).attr('src', allImages[randomNumbers[i + 38]]); break;
                case 21: $(imageList[i]).attr('src', allImages[randomNumbers[i + 40]]); break;
            }
        }

        // Sleep
        await sleep(200);

        switch (photoSet) {
            case 0: photoSet = 20; break;
            case 1: photoSet = 0; break;
            case 2: photoSet = 1; break;
            case 3: photoSet = 2; break;
            case 4: photoSet = 3; break;
            case 5: photoSet = 4; break;
            case 6: photoSet = 5; break;
            case 7: photoSet = 6; break;
            case 8: photoSet = 7; break;
            case 9: photoSet = 8; break;
            case 10: photoSet = 9; break;
            case 11: photoSet = 10; break;
            case 12: photoSet = 11; break;
            case 13: photoSet = 12; break;
            case 14: photoSet = 13; break;
            case 15: photoSet = 14; break;
            case 16: photoSet = 15; break;
            case 17: photoSet = 16; break;
            case 18: photoSet = 17; break;
            case 19: photoSet = 18; break;
            case 20: photoSet = 19; break;
        }
    }

    // Fade In
    $('.photographyTable a').removeClass("imgFadeOut");
    $('.photographyTable a').addClass("imgFadeIn");
}

async function photographyTable_rightArrow() {
    // Fade Out
    $('.photographyTable a').removeClass("imgFadeIn");
    $('.photographyTable a').addClass("imgFadeOut");

    // Sleep
    await sleep(800);

    if (!isMobile) {
        // Swap Images
        for (var i = 0; i < 15; i++) {
            if (photoSet === 0) {
                $(imageList[i]).attr('src', allImages[randomNumbers[i + 15]]);
            }
            else if (photoSet === 1) {
                $(imageList[i]).attr('src', allImages[randomNumbers[i + 30]]);
            }
            else {
                $(imageList[i]).attr('src', allImages[randomNumbers[i]]);
            }
        }

        // Sleep
        await sleep(200);

        if (photoSet === 0)
            photoSet = 1;
        else if (photoSet === 1)
            photoSet = 2;
        else
            photoSet = 0;
    }
    else if (isMobile) {
        // Swap Images
        for (var i = 0; i < 2; i++) {
            switch (photoSet) {
                case 0: $(imageList[i]).attr('src', allImages[randomNumbers[i + 2]]); break;
                case 1: $(imageList[i]).attr('src', allImages[randomNumbers[i + 4]]); break;
                case 2: $(imageList[i]).attr('src', allImages[randomNumbers[i + 6]]); break;
                case 3: $(imageList[i]).attr('src', allImages[randomNumbers[i + 8]]); break;
                case 4: $(imageList[i]).attr('src', allImages[randomNumbers[i + 10]]); break;
                case 5: $(imageList[i]).attr('src', allImages[randomNumbers[i + 12]]); break;
                case 6: $(imageList[i]).attr('src', allImages[randomNumbers[i + 14]]); break;
                case 7: $(imageList[i]).attr('src', allImages[randomNumbers[i + 16]]); break;
                case 8: $(imageList[i]).attr('src', allImages[randomNumbers[i + 18]]); break;
                case 9: $(imageList[i]).attr('src', allImages[randomNumbers[i + 20]]); break;
                case 10: $(imageList[i]).attr('src', allImages[randomNumbers[i + 22]]); break;
                case 11: $(imageList[i]).attr('src', allImages[randomNumbers[i + 24]]); break;
                case 12: $(imageList[i]).attr('src', allImages[randomNumbers[i + 26]]); break;
                case 13: $(imageList[i]).attr('src', allImages[randomNumbers[i + 28]]); break;
                case 14: $(imageList[i]).attr('src', allImages[randomNumbers[i + 30]]); break;
                case 15: $(imageList[i]).attr('src', allImages[randomNumbers[i + 32]]); break;
                case 16: $(imageList[i]).attr('src', allImages[randomNumbers[i + 34]]); break;
                case 17: $(imageList[i]).attr('src', allImages[randomNumbers[i + 36]]); break;
                case 18: $(imageList[i]).attr('src', allImages[randomNumbers[i + 38]]); break;
                case 19: $(imageList[i]).attr('src', allImages[randomNumbers[i + 40]]); break;
                case 20: $(imageList[i]).attr('src', allImages[randomNumbers[i + 42]]); break;
                case 21: $(imageList[i]).attr('src', allImages[randomNumbers[i]]); break;
            }
        }

        // Sleep
        await sleep(200);

        switch (photoSet) {
            case 0: photoSet = 1; break;
            case 1: photoSet = 2; break;
            case 2: photoSet = 3; break;
            case 3: photoSet = 4; break;
            case 4: photoSet = 5; break;
            case 5: photoSet = 6; break;
            case 6: photoSet = 7; break;
            case 7: photoSet = 8; break;
            case 8: photoSet = 9; break;
            case 9: photoSet = 10; break;
            case 10: photoSet = 11; break;
            case 11: photoSet = 12; break;
            case 12: photoSet = 13; break;
            case 13: photoSet = 14; break;
            case 14: photoSet = 15; break;
            case 15: photoSet = 16; break;
            case 16: photoSet = 17; break;
            case 17: photoSet = 18; break;
            case 18: photoSet = 19; break;
            case 19: photoSet = 20; break;
            case 20: photoSet = 0; break;
        }
    }

    // Fade In
    $('.photographyTable a').removeClass("imgFadeOut");
    $('.photographyTable a').addClass("imgFadeIn");
}